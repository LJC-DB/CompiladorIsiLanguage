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
        console.log(this.sTable.table)
    }

    this.verificaVar = (v) => {
        if (!this.sTable.existSymbol(v)) throw new SemanticError(`Variável "${v}" não foi declarada`)

    }
}

prog: 'programa' decl bloco  'fimprog.'
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
    PS_OP
    ID
        {
        this.varNome = this.pegueToken()
        this.verificaVar(this.varNome)
        }
    REL 
    (
    ID
        {
        this.varNome = this.pegueToken()
        this.verificaVar(this.varNome)
        } 
    | 
    NUMBER
    ) 
    PS_CL
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
        this.verificaVar(this.varNome)
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
        }
    |
    TEXTO
    )
    PS_CL
    DOT
    ;

cmd_attrib	:  
    ID
        {
        this.varNome = this.pegueToken()
        this.verificaVar(this.varNome)
        }
    ATTR
    (
    expr
    |
    TEXTO
    )
    DOT
    ;

cmd_condicional: 
    'se' 
    PS_OP 
    ID
        {
        this.varNome = this.pegueToken()
        this.verificaVar(this.varNome)
        }
    REL
    (
    ID
        {
        this.varNome = this.pegueToken()
        this.verificaVar(this.varNome)
        } 
    | 
    NUMBER
    ) 
    PS_CL 
    'entao' 
    CB_OP
    (cmd)+
    CB_CL
    (
    'senao' 
    CB_OP
    bloco
    CB_CL
    )?
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
            // TODO: this.verificaTipo(this.varNome)
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
