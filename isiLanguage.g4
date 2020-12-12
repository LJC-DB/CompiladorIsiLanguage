grammar isiLanguage;

@header{
    import { SymbolTable, Symbol, SemanticError } from '../batata.js'
}

@members{
    this.sTable = new SymbolTable();
    this.pegueToken = () => this._input.LT(-1).text;

    this.declaraVar = () => {
        const varNome = this.pegueToken()
        const symbol = new Symbol(varNome, this.varTipo, null)
        this.sTable.addSymbol(varNome, symbol)
    }

    this.verificaVar = (nome) => {
        this.verificaDeclarada(nome);
        this.verificaInicializada(nome);
    }

    this.isNumero = (nome) => {
        if (!this.sTable.existSymbol(nome)) throw new SemanticError(`Variável "${nome}" não foi declarada`)
    }

    this.getTipoVar = (nome) => {
        return this.sTable.table[nome].tipo;
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
        if (!this.sTable.existSymbol(nome)) throw new SemanticError(`Variável "${nome}" não foi declarada`)
    }

    this.verificaInicializada = (nome) => {
        if (this.sTable.table[nome].temValor == false)
            throw new SemanticError(`Variável ${nome} não foi inicializada`);
    }

    this.inicializa = (nome) => {
        this.sTable.table[nome].temValor = true;
    }

    this.utiliza = (nome) => {
        this.sTable.table[nome].foiUtilizada = true;
    }

    this.tudoUtilizado = () => {
        Object.values(this.sTable.table).forEach((item) => {
            if (item.foiUtilizada === false)
                console.warn(`Variável ${item.nome} não foi utilizada`);
        });
    }

    this.tudoInicializado = () => {
        Object.values(this.sTable.table).forEach((item) => {
            if (item.temValor === false)
                console.warn(`Variável ${item.nome} não foi inicializada`);
        });
    }

}

prog: 
    'programa'
    decl+
    bloco
    'fimprog.'
        {
        this.tudoInicializado();
        this.tudoUtilizado();
        }
    ;

decl:
    'declare'
    tipo { this.varTipo = this.pegueToken() }
    (declaraID)+
    ;

declaraID:
    ID { this.declaraVar() }
    (
    COMMA
    ID { this.declaraVar() }
    )*
    DOT
    ;

tipo :
      'numero'
    | 'texto'
    ;

bloco :
    (cmd)+;

cmd	: cmd_leitura
      | cmd_escrita
      | cmd_attrib
      | cmd_condicional
      | cmd_loop
      ;

cmd_loop :
    'enquanto'
    expr_condicional
    CB_OP
    bloco
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
        }
    PS_CL
    DOT
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
        // nome, 'numero'/'texto'
        }
    |
    TEXTO // texto, 'texto
    |
    expr   //  Not sure (potentially wrong)
            //expr, 'numero'
    )
    PS_CL
    DOT
    ;

cmd_attrib:
    ID
        {
        this.varNomeAtrib = this.pegueToken()
        this.verificaDeclarada(this.varNomeAtrib)
        }
    ATTR
    (
    expr { this.verificaTipo(this.varNomeAtrib, 'numero') }
    |
    TEXTO { this.verificaTipo(this.varNomeAtrib, 'texto') }
    )
    DOT { this.inicializa(this.varNomeAtrib) }
    ;

cmd_condicional:
    'se'
    expr_condicional
    'entao'
    CB_OP
    bloco
    CB_CL
    (
    'senao'
    CB_OP
    bloco
    CB_CL
    )?
    ;

expr_condicional: 
    PS_OP
    ID
        {
        this.varNome = this.pegueToken()
        this.varTipo = this.getTipoVar(this.varNome)
        this.utiliza(this.varNome)
        }
    REL { this.relSuportaTipo(this.pegueToken(), this.varTipo) }
    (
    ID
        {
        this.varNome = this.pegueToken()
        this.verificaVar(this.varNome, this.varTipo)
        this.utiliza(this.varNome)
        }
    |
    NUMBER {this.verificaVar(this.varNome, this.varTipo)}
    )
    PS_CL
    ;

expr :
    termo
    MATH
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
        }
    |
    NUMBER
    |
    PS_OP
    expr
    PS_CL
    ;
// fator :
//             NUMBER | ID | (expr)
//         ;


PS_OP: '(';
PS_CL: ')';

CB_OP: '{';
CB_CL: '}';

DOT: '.';

MATH: '+' | '-' | '*' | '/';

ATTR : ':=';

COMMA: ',';

REL: '>' | '<' | '>=' | '<=' | '==' | '!=';

TEXTO: '"'([a-z] | [A-Z] | [0-9] | ' ')* '"';

ID: [a-z] ([a-z] | [A-Z] | [0-9])*;

NUMBER: [0-9]+ ('.' [0-9]+)?;

WS: (' ' | '\t' | '\n' | '\r') -> skip;
