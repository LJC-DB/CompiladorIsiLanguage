// Generated from isiLanguage.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';


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



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u001c\u00d8\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0005\u0017\u00ab\n\u0017\u0003\u0018\u0003\u0018\u0007",
    "\u0018\u00af\n\u0018\f\u0018\u000e\u0018\u00b2\u000b\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0019\u0003\u0019\u0007\u0019\u00b8\n\u0019\f\u0019",
    "\u000e\u0019\u00bb\u000b\u0019\u0003\u001a\u0006\u001a\u00be\n\u001a",
    "\r\u001a\u000e\u001a\u00bf\u0003\u001a\u0003\u001a\u0006\u001a\u00c4",
    "\n\u001a\r\u001a\u000e\u001a\u00c5\u0005\u001a\u00c8\n\u001a\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u00cf\n",
    "\u001b\f\u001b\u000e\u001b\u00d2\u000b\u001b\u0003\u001b\u0005\u001b",
    "\u00d5\n\u001b\u0003\u001b\u0003\u001b\u0003\u00d0\u0002\u001c\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a",
    "3\u001b5\u001c\u0003\u0002\t\u0005\u0002,-//11\u0004\u0002>>@@\u0007",
    "\u0002\"\"2;C\\c|\u00c2\u00fc\u0003\u0002c|\u0005\u00022;C\\c|\u0003",
    "\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002\u00e2\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003",
    "\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002",
    "\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002",
    "\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002",
    "\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u0002",
    "5\u0003\u0002\u0002\u0002\u00037\u0003\u0002\u0002\u0002\u0005@\u0003",
    "\u0002\u0002\u0002\u0007I\u0003\u0002\u0002\u0002\tQ\u0003\u0002\u0002",
    "\u0002\u000bX\u0003\u0002\u0002\u0002\r^\u0003\u0002\u0002\u0002\u000f",
    "f\u0003\u0002\u0002\u0002\u0011o\u0003\u0002\u0002\u0002\u0013t\u0003",
    "\u0002\u0002\u0002\u0015y\u0003\u0002\u0002\u0002\u0017\u0081\u0003",
    "\u0002\u0002\u0002\u0019\u0084\u0003\u0002\u0002\u0002\u001b\u008a\u0003",
    "\u0002\u0002\u0002\u001d\u0090\u0003\u0002\u0002\u0002\u001f\u0092\u0003",
    "\u0002\u0002\u0002!\u0094\u0003\u0002\u0002\u0002#\u0096\u0003\u0002",
    "\u0002\u0002%\u0098\u0003\u0002\u0002\u0002\'\u009a\u0003\u0002\u0002",
    "\u0002)\u009c\u0003\u0002\u0002\u0002+\u009f\u0003\u0002\u0002\u0002",
    "-\u00aa\u0003\u0002\u0002\u0002/\u00ac\u0003\u0002\u0002\u00021\u00b5",
    "\u0003\u0002\u0002\u00023\u00bd\u0003\u0002\u0002\u00025\u00d4\u0003",
    "\u0002\u0002\u000278\u0007r\u0002\u000289\u0007t\u0002\u00029:\u0007",
    "q\u0002\u0002:;\u0007i\u0002\u0002;<\u0007t\u0002\u0002<=\u0007c\u0002",
    "\u0002=>\u0007o\u0002\u0002>?\u0007c\u0002\u0002?\u0004\u0003\u0002",
    "\u0002\u0002@A\u0007h\u0002\u0002AB\u0007k\u0002\u0002BC\u0007o\u0002",
    "\u0002CD\u0007r\u0002\u0002DE\u0007t\u0002\u0002EF\u0007q\u0002\u0002",
    "FG\u0007i\u0002\u0002GH\u00070\u0002\u0002H\u0006\u0003\u0002\u0002",
    "\u0002IJ\u0007f\u0002\u0002JK\u0007g\u0002\u0002KL\u0007e\u0002\u0002",
    "LM\u0007n\u0002\u0002MN\u0007c\u0002\u0002NO\u0007t\u0002\u0002OP\u0007",
    "g\u0002\u0002P\b\u0003\u0002\u0002\u0002QR\u0007p\u0002\u0002RS\u0007",
    "w\u0002\u0002ST\u0007o\u0002\u0002TU\u0007g\u0002\u0002UV\u0007t\u0002",
    "\u0002VW\u0007q\u0002\u0002W\n\u0003\u0002\u0002\u0002XY\u0007v\u0002",
    "\u0002YZ\u0007g\u0002\u0002Z[\u0007z\u0002\u0002[\\\u0007v\u0002\u0002",
    "\\]\u0007q\u0002\u0002]\f\u0003\u0002\u0002\u0002^_\u0007t\u0002\u0002",
    "_`\u0007g\u0002\u0002`a\u0007v\u0002\u0002ab\u0007q\u0002\u0002bc\u0007",
    "t\u0002\u0002cd\u0007p\u0002\u0002de\u0007c\u0002\u0002e\u000e\u0003",
    "\u0002\u0002\u0002fg\u0007g\u0002\u0002gh\u0007p\u0002\u0002hi\u0007",
    "s\u0002\u0002ij\u0007w\u0002\u0002jk\u0007c\u0002\u0002kl\u0007p\u0002",
    "\u0002lm\u0007v\u0002\u0002mn\u0007q\u0002\u0002n\u0010\u0003\u0002",
    "\u0002\u0002op\u0007r\u0002\u0002pq\u0007c\u0002\u0002qr\u0007t\u0002",
    "\u0002rs\u0007c\u0002\u0002s\u0012\u0003\u0002\u0002\u0002tu\u0007n",
    "\u0002\u0002uv\u0007g\u0002\u0002vw\u0007k\u0002\u0002wx\u0007c\u0002",
    "\u0002x\u0014\u0003\u0002\u0002\u0002yz\u0007g\u0002\u0002z{\u0007u",
    "\u0002\u0002{|\u0007e\u0002\u0002|}\u0007t\u0002\u0002}~\u0007g\u0002",
    "\u0002~\u007f\u0007x\u0002\u0002\u007f\u0080\u0007c\u0002\u0002\u0080",
    "\u0016\u0003\u0002\u0002\u0002\u0081\u0082\u0007u\u0002\u0002\u0082",
    "\u0083\u0007g\u0002\u0002\u0083\u0018\u0003\u0002\u0002\u0002\u0084",
    "\u0085\u0007g\u0002\u0002\u0085\u0086\u0007p\u0002\u0002\u0086\u0087",
    "\u0007v\u0002\u0002\u0087\u0088\u0007c\u0002\u0002\u0088\u0089\u0007",
    "q\u0002\u0002\u0089\u001a\u0003\u0002\u0002\u0002\u008a\u008b\u0007",
    "u\u0002\u0002\u008b\u008c\u0007g\u0002\u0002\u008c\u008d\u0007p\u0002",
    "\u0002\u008d\u008e\u0007c\u0002\u0002\u008e\u008f\u0007q\u0002\u0002",
    "\u008f\u001c\u0003\u0002\u0002\u0002\u0090\u0091\u0007*\u0002\u0002",
    "\u0091\u001e\u0003\u0002\u0002\u0002\u0092\u0093\u0007+\u0002\u0002",
    "\u0093 \u0003\u0002\u0002\u0002\u0094\u0095\u0007}\u0002\u0002\u0095",
    "\"\u0003\u0002\u0002\u0002\u0096\u0097\u0007\u007f\u0002\u0002\u0097",
    "$\u0003\u0002\u0002\u0002\u0098\u0099\u00070\u0002\u0002\u0099&\u0003",
    "\u0002\u0002\u0002\u009a\u009b\t\u0002\u0002\u0002\u009b(\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0007<\u0002\u0002\u009d\u009e\u0007?\u0002",
    "\u0002\u009e*\u0003\u0002\u0002\u0002\u009f\u00a0\u0007.\u0002\u0002",
    "\u00a0,\u0003\u0002\u0002\u0002\u00a1\u00ab\t\u0003\u0002\u0002\u00a2",
    "\u00a3\u0007@\u0002\u0002\u00a3\u00ab\u0007?\u0002\u0002\u00a4\u00a5",
    "\u0007>\u0002\u0002\u00a5\u00ab\u0007?\u0002\u0002\u00a6\u00a7\u0007",
    "?\u0002\u0002\u00a7\u00ab\u0007?\u0002\u0002\u00a8\u00a9\u0007#\u0002",
    "\u0002\u00a9\u00ab\u0007?\u0002\u0002\u00aa\u00a1\u0003\u0002\u0002",
    "\u0002\u00aa\u00a2\u0003\u0002\u0002\u0002\u00aa\u00a4\u0003\u0002\u0002",
    "\u0002\u00aa\u00a6\u0003\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002",
    "\u0002\u00ab.\u0003\u0002\u0002\u0002\u00ac\u00b0\u0007$\u0002\u0002",
    "\u00ad\u00af\t\u0004\u0002\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002",
    "\u00af\u00b2\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002",
    "\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b3\u0003\u0002\u0002\u0002",
    "\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007$\u0002\u0002",
    "\u00b40\u0003\u0002\u0002\u0002\u00b5\u00b9\t\u0005\u0002\u0002\u00b6",
    "\u00b8\t\u0006\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8",
    "\u00bb\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00b9",
    "\u00ba\u0003\u0002\u0002\u0002\u00ba2\u0003\u0002\u0002\u0002\u00bb",
    "\u00b9\u0003\u0002\u0002\u0002\u00bc\u00be\t\u0007\u0002\u0002\u00bd",
    "\u00bc\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf",
    "\u00bd\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0",
    "\u00c7\u0003\u0002\u0002\u0002\u00c1\u00c3\u00070\u0002\u0002\u00c2",
    "\u00c4\t\u0007\u0002\u0002\u00c3\u00c2\u0003\u0002\u0002\u0002\u00c4",
    "\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c5",
    "\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c8\u0003\u0002\u0002\u0002\u00c7",
    "\u00c1\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8",
    "4\u0003\u0002\u0002\u0002\u00c9\u00d5\t\b\u0002\u0002\u00ca\u00cb\u0007",
    "1\u0002\u0002\u00cb\u00cc\u00071\u0002\u0002\u00cc\u00d0\u0003\u0002",
    "\u0002\u0002\u00cd\u00cf\u000b\u0002\u0002\u0002\u00ce\u00cd\u0003\u0002",
    "\u0002\u0002\u00cf\u00d2\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002",
    "\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d1\u00d3\u0003\u0002",
    "\u0002\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d3\u00d5\u0007\f",
    "\u0002\u0002\u00d4\u00c9\u0003\u0002\u0002\u0002\u00d4\u00ca\u0003\u0002",
    "\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d7\b\u001b",
    "\u0002\u0002\u00d76\u0003\u0002\u0002\u0002\r\u0002\u00aa\u00ae\u00b0",
    "\u00b7\u00b9\u00bf\u00c5\u00c7\u00d0\u00d4\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class isiLanguageLexer extends antlr4.Lexer {

    static grammarFileName = "isiLanguage.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'programa'", "'fimprog.'", "'declare'", 
                         "'numero'", "'texto'", "'retorna'", "'enquanto'", 
                         "'para'", "'leia'", "'escreva'", "'se'", "'entao'", 
                         "'senao'", "'('", "')'", "'{'", "'}'", "'.'", null, 
                         "':='", "','" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, "PS_OP", "PS_CL", 
                          "CB_OP", "CB_CL", "DOT", "MATH", "ATTR", "COMMA", 
                          "REL", "TEXTO", "ID", "NUMBER", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "PS_OP", "PS_CL", "CB_OP", "CB_CL", "DOT", "MATH", 
                      "ATTR", "COMMA", "REL", "TEXTO", "ID", "NUMBER", "WS" ];

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
isiLanguageLexer.T__11 = 12;
isiLanguageLexer.T__12 = 13;
isiLanguageLexer.PS_OP = 14;
isiLanguageLexer.PS_CL = 15;
isiLanguageLexer.CB_OP = 16;
isiLanguageLexer.CB_CL = 17;
isiLanguageLexer.DOT = 18;
isiLanguageLexer.MATH = 19;
isiLanguageLexer.ATTR = 20;
isiLanguageLexer.COMMA = 21;
isiLanguageLexer.REL = 22;
isiLanguageLexer.TEXTO = 23;
isiLanguageLexer.ID = 24;
isiLanguageLexer.NUMBER = 25;
isiLanguageLexer.WS = 26;



