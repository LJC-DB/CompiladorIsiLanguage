 grammar isiLanguage;

@header{

}

@members{
    self.pegueToken=lambda : self._input.LT(-1).text
    self.symbolTable = {}

    def a():
        self._id = self.pegueToken()
        self.symbolTable[self._id] = (self._tmpTipo, None)
        print(self.symbolTable[self._id])
    self.declaraVar = a

}

prog: 'programa' decl bloco  'fimprog.'
        ;

decl:  'declare' tipo
{
self._tmpTipo = self.pegueToken()
} (declaraID)+
        ;

declaraID:  ID {self.a()}
            (COMMA  ID )*
            DOT
           ;

tipo  : 'numero'
      | 'texto'
      ;

bloco: (cmd)+;

cmd	  : cmd_leitura
      | cmd_escrita
      | cmd_attrib
      | cmd_condicional
      | cmd_loop
      ;

cmd_loop : 'enquanto' PS_OP ID REL (ID | NUMBER) PS_CL
            CB_OP
                bloco
            CB_CL
            ;

cmd_leitura	: 'leia' PS_OP
                     ID
                     PS_CL
                     DOT
            ;

cmd_escrita	: 'escreva' PS_OP
                        (ID | TEXTO)
                        PS_CL
                        DOT
            ;

cmd_attrib	:  ID
                ATTR
                (expr | TEXTO)
                DOT
            ;

cmd_condicional: 'se' PS_OP ID REL (ID | NUMBER) PS_CL 'entao' CB_OP
                    (cmd)+
                CB_CL
                (
                'senao' CB_OP
                    bloco
                CB_CL
                )?;

expr		:  termo MATH expr | termo
			;

termo		: ID | NUMBER | PS_OP expr PS_CL
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
