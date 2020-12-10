 grammar isiLanguage;

prog: 'programa' decl bloco  'fimprog.'
        ;

decl:  'declare' tipo (declaraID)+
        ;

declaraID:  ID
            (COMMA  ID )*
            DOT
           ;

tipo  : 'numero'
      | 'texto'
      ;

bloco	:  (cmd)+
		  ;

cmd		:  cmdleitura
      |  cmdescrita
      |  cmdattrib
      |  cmdcondicional
      ;

cmdleitura	: 'leia' PS_OP
                     ID
                     PS_CL
                     DOT
            ;

cmdescrita	: 'escreva' PS_OP
                        (ID | TEXTO)
                        PS_CL
                        DOT
            ;

cmdattrib	:  ID
                ATTR
                (expr | TEXTO)
                DOT
            ;

cmdcondicional: 'se' PS_OP ID REL (ID | NUMBER) PS_CL 'entao' CB_OP
                    (cmd)+
                CB_CL
                (
                'senao' CB_OP
                    (cmd+)
                CB_CL
                )?;

expr		:  expr MATH  expr | termo
			;

termo		: ID | NUMBER
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
