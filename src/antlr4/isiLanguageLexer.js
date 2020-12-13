// Generated from isiLanguage.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';


    import { TabelaSimbolos } from '../utils/tabelaSimbolos.js';
    import { Simbolo } from '../structures/simbolo.js';
    import { SemanticError } from '../errors/semanticError.js';
    import { Bloco } from '../structures/bloco.js';
    import { Programa } from '../structures/programa.js';
    import { Atribuicao } from '../structures/atribuicao.js';
    import { Condicional } from '../structures/condicional.js';
    import { Declare } from '../structures/declare.js';
    import { Enquanto } from '../structures/enquanto.js';
    import { Escreve } from '../structures/escreve.js';
    import { Leitura } from '../structures/leitura.js';
    import { Pilha } from '../utils/pilha.js';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u001a\u00bc\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u009a\n\u0015\u0003",
    "\u0016\u0003\u0016\u0007\u0016\u009e\n\u0016\f\u0016\u000e\u0016\u00a1",
    "\u000b\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0007\u0017",
    "\u00a7\n\u0017\f\u0017\u000e\u0017\u00aa\u000b\u0017\u0003\u0018\u0006",
    "\u0018\u00ad\n\u0018\r\u0018\u000e\u0018\u00ae\u0003\u0018\u0003\u0018",
    "\u0006\u0018\u00b3\n\u0018\r\u0018\u000e\u0018\u00b4\u0005\u0018\u00b7",
    "\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0002\u0002",
    "\u001a\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018",
    "/\u00191\u001a\u0003\u0002\t\u0005\u0002,-//11\u0004\u0002>>@@\u0006",
    "\u0002\"\"2;C\\c|\u0003\u0002c|\u0005\u00022;C\\c|\u0003\u00022;\u0005",
    "\u0002\u000b\f\u000f\u000f\"\"\u0002\u00c4\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002",
    "\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002",
    "\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002",
    ")\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003",
    "\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002",
    "\u0002\u0002\u00033\u0003\u0002\u0002\u0002\u0005<\u0003\u0002\u0002",
    "\u0002\u0007E\u0003\u0002\u0002\u0002\tM\u0003\u0002\u0002\u0002\u000b",
    "T\u0003\u0002\u0002\u0002\rZ\u0003\u0002\u0002\u0002\u000fc\u0003\u0002",
    "\u0002\u0002\u0011h\u0003\u0002\u0002\u0002\u0013p\u0003\u0002\u0002",
    "\u0002\u0015s\u0003\u0002\u0002\u0002\u0017y\u0003\u0002\u0002\u0002",
    "\u0019\u007f\u0003\u0002\u0002\u0002\u001b\u0081\u0003\u0002\u0002\u0002",
    "\u001d\u0083\u0003\u0002\u0002\u0002\u001f\u0085\u0003\u0002\u0002\u0002",
    "!\u0087\u0003\u0002\u0002\u0002#\u0089\u0003\u0002\u0002\u0002%\u008b",
    "\u0003\u0002\u0002\u0002\'\u008e\u0003\u0002\u0002\u0002)\u0099\u0003",
    "\u0002\u0002\u0002+\u009b\u0003\u0002\u0002\u0002-\u00a4\u0003\u0002",
    "\u0002\u0002/\u00ac\u0003\u0002\u0002\u00021\u00b8\u0003\u0002\u0002",
    "\u000234\u0007r\u0002\u000245\u0007t\u0002\u000256\u0007q\u0002\u0002",
    "67\u0007i\u0002\u000278\u0007t\u0002\u000289\u0007c\u0002\u00029:\u0007",
    "o\u0002\u0002:;\u0007c\u0002\u0002;\u0004\u0003\u0002\u0002\u0002<=",
    "\u0007h\u0002\u0002=>\u0007k\u0002\u0002>?\u0007o\u0002\u0002?@\u0007",
    "r\u0002\u0002@A\u0007t\u0002\u0002AB\u0007q\u0002\u0002BC\u0007i\u0002",
    "\u0002CD\u00070\u0002\u0002D\u0006\u0003\u0002\u0002\u0002EF\u0007f",
    "\u0002\u0002FG\u0007g\u0002\u0002GH\u0007e\u0002\u0002HI\u0007n\u0002",
    "\u0002IJ\u0007c\u0002\u0002JK\u0007t\u0002\u0002KL\u0007g\u0002\u0002",
    "L\b\u0003\u0002\u0002\u0002MN\u0007p\u0002\u0002NO\u0007w\u0002\u0002",
    "OP\u0007o\u0002\u0002PQ\u0007g\u0002\u0002QR\u0007t\u0002\u0002RS\u0007",
    "q\u0002\u0002S\n\u0003\u0002\u0002\u0002TU\u0007v\u0002\u0002UV\u0007",
    "g\u0002\u0002VW\u0007z\u0002\u0002WX\u0007v\u0002\u0002XY\u0007q\u0002",
    "\u0002Y\f\u0003\u0002\u0002\u0002Z[\u0007g\u0002\u0002[\\\u0007p\u0002",
    "\u0002\\]\u0007s\u0002\u0002]^\u0007w\u0002\u0002^_\u0007c\u0002\u0002",
    "_`\u0007p\u0002\u0002`a\u0007v\u0002\u0002ab\u0007q\u0002\u0002b\u000e",
    "\u0003\u0002\u0002\u0002cd\u0007n\u0002\u0002de\u0007g\u0002\u0002e",
    "f\u0007k\u0002\u0002fg\u0007c\u0002\u0002g\u0010\u0003\u0002\u0002\u0002",
    "hi\u0007g\u0002\u0002ij\u0007u\u0002\u0002jk\u0007e\u0002\u0002kl\u0007",
    "t\u0002\u0002lm\u0007g\u0002\u0002mn\u0007x\u0002\u0002no\u0007c\u0002",
    "\u0002o\u0012\u0003\u0002\u0002\u0002pq\u0007u\u0002\u0002qr\u0007g",
    "\u0002\u0002r\u0014\u0003\u0002\u0002\u0002st\u0007g\u0002\u0002tu\u0007",
    "p\u0002\u0002uv\u0007v\u0002\u0002vw\u0007c\u0002\u0002wx\u0007q\u0002",
    "\u0002x\u0016\u0003\u0002\u0002\u0002yz\u0007u\u0002\u0002z{\u0007g",
    "\u0002\u0002{|\u0007p\u0002\u0002|}\u0007c\u0002\u0002}~\u0007q\u0002",
    "\u0002~\u0018\u0003\u0002\u0002\u0002\u007f\u0080\u0007*\u0002\u0002",
    "\u0080\u001a\u0003\u0002\u0002\u0002\u0081\u0082\u0007+\u0002\u0002",
    "\u0082\u001c\u0003\u0002\u0002\u0002\u0083\u0084\u0007}\u0002\u0002",
    "\u0084\u001e\u0003\u0002\u0002\u0002\u0085\u0086\u0007\u007f\u0002\u0002",
    "\u0086 \u0003\u0002\u0002\u0002\u0087\u0088\u00070\u0002\u0002\u0088",
    "\"\u0003\u0002\u0002\u0002\u0089\u008a\t\u0002\u0002\u0002\u008a$\u0003",
    "\u0002\u0002\u0002\u008b\u008c\u0007<\u0002\u0002\u008c\u008d\u0007",
    "?\u0002\u0002\u008d&\u0003\u0002\u0002\u0002\u008e\u008f\u0007.\u0002",
    "\u0002\u008f(\u0003\u0002\u0002\u0002\u0090\u009a\t\u0003\u0002\u0002",
    "\u0091\u0092\u0007@\u0002\u0002\u0092\u009a\u0007?\u0002\u0002\u0093",
    "\u0094\u0007>\u0002\u0002\u0094\u009a\u0007?\u0002\u0002\u0095\u0096",
    "\u0007?\u0002\u0002\u0096\u009a\u0007?\u0002\u0002\u0097\u0098\u0007",
    "#\u0002\u0002\u0098\u009a\u0007?\u0002\u0002\u0099\u0090\u0003\u0002",
    "\u0002\u0002\u0099\u0091\u0003\u0002\u0002\u0002\u0099\u0093\u0003\u0002",
    "\u0002\u0002\u0099\u0095\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002",
    "\u0002\u0002\u009a*\u0003\u0002\u0002\u0002\u009b\u009f\u0007$\u0002",
    "\u0002\u009c\u009e\t\u0004\u0002\u0002\u009d\u009c\u0003\u0002\u0002",
    "\u0002\u009e\u00a1\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a2\u0003\u0002\u0002",
    "\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007$\u0002",
    "\u0002\u00a3,\u0003\u0002\u0002\u0002\u00a4\u00a8\t\u0005\u0002\u0002",
    "\u00a5\u00a7\t\u0006\u0002\u0002\u00a6\u00a5\u0003\u0002\u0002\u0002",
    "\u00a7\u00aa\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9.\u0003\u0002\u0002\u0002",
    "\u00aa\u00a8\u0003\u0002\u0002\u0002\u00ab\u00ad\t\u0007\u0002\u0002",
    "\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002",
    "\u00ae\u00ac\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002",
    "\u00af\u00b6\u0003\u0002\u0002\u0002\u00b0\u00b2\u00070\u0002\u0002",
    "\u00b1\u00b3\t\u0007\u0002\u0002\u00b2\u00b1\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002",
    "\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b7\u0003\u0002\u0002\u0002",
    "\u00b6\u00b0\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002",
    "\u00b70\u0003\u0002\u0002\u0002\u00b8\u00b9\t\b\u0002\u0002\u00b9\u00ba",
    "\u0003\u0002\u0002\u0002\u00ba\u00bb\b\u0019\u0002\u0002\u00bb2\u0003",
    "\u0002\u0002\u0002\u000b\u0002\u0099\u009d\u009f\u00a6\u00a8\u00ae\u00b4",
    "\u00b6\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class isiLanguageLexer extends antlr4.Lexer {

    static grammarFileName = "isiLanguage.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'programa'", "'fimprog.'", "'declare'", 
                         "'numero'", "'texto'", "'enquanto'", "'leia'", 
                         "'escreva'", "'se'", "'entao'", "'senao'", "'('", 
                         "')'", "'{'", "'}'", "'.'", null, "':='", "','" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, "PS_OP", "PS_CL", "CB_OP", 
                          "CB_CL", "DOT", "MATH", "ATTR", "COMMA", "REL", 
                          "TEXTO", "ID", "NUMBER", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "PS_OP", "PS_CL", 
                      "CB_OP", "CB_CL", "DOT", "MATH", "ATTR", "COMMA", 
                      "REL", "TEXTO", "ID", "NUMBER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());

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

    get atn() {
        return atn;
    }
}

isiLanguageLexer.EOF = antlr4.Token.EOF;
isiLanguageLexer.T__0 = 1;
isiLanguageLexer.T__1 = 2;
isiLanguageLexer.T__2 = 3;
isiLanguageLexer.T__3 = 4;
isiLanguageLexer.T__4 = 5;
isiLanguageLexer.T__5 = 6;
isiLanguageLexer.T__6 = 7;
isiLanguageLexer.T__7 = 8;
isiLanguageLexer.T__8 = 9;
isiLanguageLexer.T__9 = 10;
isiLanguageLexer.T__10 = 11;
isiLanguageLexer.PS_OP = 12;
isiLanguageLexer.PS_CL = 13;
isiLanguageLexer.CB_OP = 14;
isiLanguageLexer.CB_CL = 15;
isiLanguageLexer.DOT = 16;
isiLanguageLexer.MATH = 17;
isiLanguageLexer.ATTR = 18;
isiLanguageLexer.COMMA = 19;
isiLanguageLexer.REL = 20;
isiLanguageLexer.TEXTO = 21;
isiLanguageLexer.ID = 22;
isiLanguageLexer.NUMBER = 23;
isiLanguageLexer.WS = 24;



