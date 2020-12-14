grammar isiLanguage;

@header{
    import { Atribuicao } from '../structures/atribuicao.js';
    import { Bloco } from '../structures/bloco.js';
    import { Condicional } from '../structures/condicional.js';
    import { Declare } from '../structures/declare.js';
    import { Enquanto } from '../structures/enquanto.js';
    import { Escreve } from '../structures/escreve.js';
    import { Leitura } from '../structures/leitura.js';
    import { Para } from '../structures/para.js';
    import { Pilha } from '../utils/pilha.js';
    import { Programa } from '../structures/programa.js';
    import { Retorna } from '../structures/retorna.js';
    import { SemanticError } from '../errors/semanticError.js';
    import { Simbolo } from '../structures/simbolo.js';
    import { TabelaSimbolos } from '../utils/tabelaSimbolos.js';
}

@members{
    this.tabSim = new TabelaSimbolos();
    this.pegueToken = () => this._input.LT(-1).text;

    this.declaraVar = () => {
        const varNome = this.pegueToken()
        const simbolo = new Simbolo(varNome, this.varTipo, null)
        this.tabSim.addSimbolo(varNome, simbolo)
    }

    this.verificaVar = (nome) => {
        this.verificaDeclarada(nome);
        this.verificaInicializada(nome);
    }

    this.getTipoVar = (nome) => {
        return this.tabSim.table[nome].tipo;
    }

    this.verificaTipo = (nome, tipo) => {
        const varTipo = this.getTipoVar(nome);
        if (varTipo !== tipo) {
            throw new SemanticError(`Erro de tipagem: A variável "${nome}" tem o tipo "${varTipo}" mas devia ter o tipo "${tipo}"`);
        }
        return tipo
    }

    this.relSuportaTipo = (rel, tipo) => {
        if (tipo === 'numero') return true;

        if (['==', '!='].includes(rel))
            return true;

        throw new SemanticError(`bla`);
    }

    this.verificaDeclarada = (nome) => {
        if (!this.tabSim.existeSimbolo(nome)) throw new SemanticError(`Variável "${nome}" não foi declarada`)
    }

    this.verificaInicializada = (nome) => {
        if (this.tabSim.table[nome].temValor == false)
            throw new SemanticError(`Variável ${nome} não foi inicializada`);
    }

    this.inicializa = (nome) => {
        this.tabSim.table[nome].temValor = true;
    }

    this.utiliza = (nome) => {
        this.tabSim.table[nome].foiUtilizada = true;
    }

    this.tudoUtilizado = () => {
        Object.values(this.tabSim.table).forEach((item) => {
            if (item.foiUtilizada === false)
                console.warn(`Variável ${item.nome} não foi utilizada`);
        });
    }

    this.tudoInicializado = () => {
        Object.values(this.tabSim.table).forEach((item) => {
            if (item.temValor === false)
                console.warn(`Variável ${item.nome} não foi inicializada`);
        });
    }

    this.currThread = [];
    this.pilha = new Pilha([[]]);
    this.listaDeclaracao = [];

    this.condStack = new Pilha();

    this.compile = () => {
        this.tudoInicializado();
        this.tudoUtilizado();

        this.listaDeclaracao = [new Bloco(this.listaDeclaracao)];
        this.programa = new Programa(this.listaDeclaracao, this.pilha.pop())
        return this.programa.compila();
    }
}

prog:
    'programa'
    decl+
    bloco
    'fimprog.'
    ;

decl:
    'declare'
    tipo
        {
            this.varTipo = this.pegueToken();
            this.listaNomes = [];
        }
    (declaraID)+ { this.listaDeclaracao.push(new Declare(this.listaNomes, this.varTipo)) }
    ;

declaraID:
    ID
        {
            this.declaraVar()
            this.listaNomes.push(this.pegueToken())
        }
    (
    COMMA
    ID
        {
            this.declaraVar()
            this.listaNomes.push(this.pegueToken())
        }
    )*
    DOT
    ;

tipo :
      'numero'
    | 'texto'
    ;

bloco :
        {
            this.currThread = [];
            this.pilha.push(this.currThread);
        }
    (cmd)+
        {
            this.listaComandos = this.pilha.pop()
            this.pilha.push([new Bloco(this.listaComandos)]);
        }
    ;

cmd	: cmd_leitura DOT
      | cmd_escrita DOT
      | cmd_attrib DOT
      | cmd_condicional
      | cmd_loop
      | cmd_retorna DOT
      | cmd_para
      ;

cmd_retorna: 'retorna' { this.pilha.peek().push(new Retorna()) } ;

cmd_loop :
    'enquanto'
    PS_OP
    expr_condicional
    PS_CL { this.condStack.push(this.exprCond) }
    CB_OP
    bloco
        {
            this.listaEnquanto = this.pilha.pop()
            this.exprCond = this.condStack.pop()
            this.pilha.peek().push(new Enquanto(this.exprCond, this.listaEnquanto))
        }
    CB_CL
    ;

cmd_para :
    'para'
    PS_OP { this.attr1 = null }
    (cmd_attrib { this.attr1 = this.pilha.peek().pop() })?
    DOT {this.exprCond = null }
    expr_condicional?
    DOT { this.attr2 = null }
    (cmd_attrib { this.attr2 = this.pilha.peek().pop() } )?
    PS_CL
    CB_OP
        { this.pilha.peek().push(new Para(this.attr1, this.exprCond, this.attr2)) }
    bloco
        {
            this.listaFor = this.pilha.pop()
            this.para = this.pilha.peek().pop()
            this.para.adicionaBloco(this.listaFor)
            this.pilha.peek().push(this.para)
        }
    CB_CL
    ;

cmd_leitura	:
    'leia'
    PS_OP
    ID
        {
            this.varNome = this.pegueToken()
            this.verificaDeclarada(this.varNome)
            this.inicializa(this.varNome)
            this.pilha.peek().push(new Leitura(this.tabSim.table[this.varNome]))
        }
    PS_CL
    
    ;

cmd_escrita	:
    'escreva'
    PS_OP
    (
    ID
        {
            this.varNome = this.pegueToken()
            this.verificaVar(this.varNome)

            this.utiliza(this.varNome)
            this.varTipo = this.getTipoVar(this.varNome)

            this.valor = this.varNome
        }
    |
    TEXTO
        {
            this.varTipo = 'texto';
            this.valor = this.pegueToken();
        }
    |
    { this.expressao = ''; }
    expr
        {
            this.varTipo = 'numero';
            this.valor = this.expressao;
        }
    )
    PS_CL
    { this.pilha.peek().push(new Escreve(this.valor, this.varTipo)) }
    ;

cmd_attrib:
    ID
        {
            this.varNomeAtrib = this.pegueToken()
            this.verificaDeclarada(this.varNomeAtrib)
        }
    ATTR
    (
    { this.expressao = '' }
    expr
        {
            this.verificaTipo(this.varNomeAtrib, 'numero')
            this.valor = this.expressao
        }
    |
    TEXTO
        {
            this.verificaTipo(this.varNomeAtrib, 'texto')
            this.valor = this.pegueToken()
        }
    )
        {
            this.inicializa(this.varNomeAtrib)
            this.pilha.peek().push(new Atribuicao(this.varNomeAtrib, this.valor))
        }
    ;

cmd_condicional:
    'se'
    PS_OP
    expr_condicional
    PS_CL { this.condStack.push(this.exprCond) }
    'entao'
    CB_OP
    bloco
    CB_CL
    (
    'senao'
    CB_OP
    bloco { this.listaFalse = this.pilha.pop() }
    CB_CL
    )?
        {
            this.listaTrue = this.pilha.pop()
            this.exprCond = this.condStack.pop()
            this.pilha.peek().push(new Condicional(this.exprCond, this.listaTrue, this.listaFalse || []))
            this.listaTrue = [];
            this.listaFalse = [];
        }
    ;

expr_condicional:
    ID
        {
            this.varNome = this.pegueToken();
            this.varTipo = this.getTipoVar(this.varNome);
            this.utiliza(this.varNome);
            this.exprCond = this.varNome;
        }
    REL
        {
            this.relSuportaTipo(this.pegueToken(), this.varTipo)
            this.exprCond += " " + this.pegueToken();
        }
    (
    ID
        {
            this.varNome = this.pegueToken()
            this.verificaVar(this.varNome, this.varTipo)
            this.utiliza(this.varNome)
            this.exprCond += " " + this.varNome;
        }
    |
    NUMBER
        {
            this.verificaVar(this.varNome, this.varTipo)
            this.exprCond += " " + this.pegueToken();
        }
    )
    ;

expr:
    termo
    MATH { this.expressao += ' ' + this.pegueToken() }
    expr
    |
    termo
    ;

termo:
    ID
        {
            this.varNome = this.pegueToken()
            this.verificaVar(this.varNome)
            this.verificaTipo(this.varNome, 'numero')
            this.utiliza(this.varNome)
            this.expressao += ' ' + this.pegueToken()
        }
    |
    NUMBER { this.expressao += ' ' + this.pegueToken() }
    |
    PS_OP { this.expressao += ' ' + this.pegueToken() }
    expr
    PS_CL { this.expressao += ' ' + this.pegueToken() }
    ;

PS_OP: '(';
PS_CL: ')';

CB_OP: '{';
CB_CL: '}';

DOT: '.';

MATH: '+' | '-' | '*' | '/';

ATTR : ':=';

COMMA: ',';

REL: '>' | '<' | '>=' | '<=' | '==' | '!=';

TEXTO: '"'  ([a-z] | [A-Z] | [À-ú] | [0-9] | ' ')* '"' ;

ID: [a-z] ([a-z] | [A-Z] | [0-9])*;

NUMBER: [0-9]+ ('.' [0-9]+)?;

WS: (' ' | '\t' | '\n' | '\r' | '//' .*? '\n' ) -> skip;
