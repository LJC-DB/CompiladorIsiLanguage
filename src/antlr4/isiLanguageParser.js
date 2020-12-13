// Generated from isiLanguage.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import isiLanguageListener from './isiLanguageListener.js';

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
    "\u5964\u0003\u001a\u00ac\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002",
    "\u0003\u0002\u0006\u0002!\n\u0002\r\u0002\u000e\u0002\"\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0006\u0003-\n\u0003\r\u0003\u000e\u0003.\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u00048\n\u0004\f\u0004\u000e\u0004;\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0006\u0006C\n\u0006",
    "\r\u0006\u000e\u0006D\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007N\n\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nh\n\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000bw\n\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005",
    "\f\u0088\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u0095\n\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u00a0\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u00aa\n\u000f\u0003\u000f\u0002\u0002\u0010\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u0002\u0003\u0003\u0002",
    "\u0006\u0007\u0002\u00ad\u0002\u001e\u0003\u0002\u0002\u0002\u0004(",
    "\u0003\u0002\u0002\u0002\u00062\u0003\u0002\u0002\u0002\b>\u0003\u0002",
    "\u0002\u0002\n@\u0003\u0002\u0002\u0002\fM\u0003\u0002\u0002\u0002\u000e",
    "O\u0003\u0002\u0002\u0002\u0010V\u0003\u0002\u0002\u0002\u0012]\u0003",
    "\u0002\u0002\u0002\u0014m\u0003\u0002\u0002\u0002\u0016{\u0003\u0002",
    "\u0002\u0002\u0018\u008b\u0003\u0002\u0002\u0002\u001a\u009f\u0003\u0002",
    "\u0002\u0002\u001c\u00a9\u0003\u0002\u0002\u0002\u001e \u0007\u0003",
    "\u0002\u0002\u001f!\u0005\u0004\u0003\u0002 \u001f\u0003\u0002\u0002",
    "\u0002!\"\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"#\u0003",
    "\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$%\u0005\n\u0006\u0002%",
    "&\u0007\u0004\u0002\u0002&\'\b\u0002\u0001\u0002\'\u0003\u0003\u0002",
    "\u0002\u0002()\u0007\u0005\u0002\u0002)*\u0005\b\u0005\u0002*,\b\u0003",
    "\u0001\u0002+-\u0005\u0006\u0004\u0002,+\u0003\u0002\u0002\u0002-.\u0003",
    "\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002",
    "/0\u0003\u0002\u0002\u000201\b\u0003\u0001\u00021\u0005\u0003\u0002",
    "\u0002\u000223\u0007\u0018\u0002\u000239\b\u0004\u0001\u000245\u0007",
    "\u0015\u0002\u000256\u0007\u0018\u0002\u000268\b\u0004\u0001\u00027",
    "4\u0003\u0002\u0002\u00028;\u0003\u0002\u0002\u000297\u0003\u0002\u0002",
    "\u00029:\u0003\u0002\u0002\u0002:<\u0003\u0002\u0002\u0002;9\u0003\u0002",
    "\u0002\u0002<=\u0007\u0012\u0002\u0002=\u0007\u0003\u0002\u0002\u0002",
    ">?\t\u0002\u0002\u0002?\t\u0003\u0002\u0002\u0002@B\b\u0006\u0001\u0002",
    "AC\u0005\f\u0007\u0002BA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002",
    "\u0002DB\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EF\u0003\u0002",
    "\u0002\u0002FG\b\u0006\u0001\u0002G\u000b\u0003\u0002\u0002\u0002HN",
    "\u0005\u0010\t\u0002IN\u0005\u0012\n\u0002JN\u0005\u0014\u000b\u0002",
    "KN\u0005\u0016\f\u0002LN\u0005\u000e\b\u0002MH\u0003\u0002\u0002\u0002",
    "MI\u0003\u0002\u0002\u0002MJ\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002",
    "\u0002ML\u0003\u0002\u0002\u0002N\r\u0003\u0002\u0002\u0002OP\u0007",
    "\b\u0002\u0002PQ\u0005\u0018\r\u0002QR\u0007\u0010\u0002\u0002RS\u0005",
    "\n\u0006\u0002ST\b\b\u0001\u0002TU\u0007\u0011\u0002\u0002U\u000f\u0003",
    "\u0002\u0002\u0002VW\u0007\t\u0002\u0002WX\u0007\u000e\u0002\u0002X",
    "Y\u0007\u0018\u0002\u0002YZ\b\t\u0001\u0002Z[\u0007\u000f\u0002\u0002",
    "[\\\u0007\u0012\u0002\u0002\\\u0011\u0003\u0002\u0002\u0002]^\u0007",
    "\n\u0002\u0002^g\u0007\u000e\u0002\u0002_`\u0007\u0018\u0002\u0002`",
    "h\b\n\u0001\u0002ab\u0007\u0017\u0002\u0002bh\b\n\u0001\u0002cd\b\n",
    "\u0001\u0002de\u0005\u001a\u000e\u0002ef\b\n\u0001\u0002fh\u0003\u0002",
    "\u0002\u0002g_\u0003\u0002\u0002\u0002ga\u0003\u0002\u0002\u0002gc\u0003",
    "\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ij\u0007\u000f\u0002\u0002",
    "jk\u0007\u0012\u0002\u0002kl\b\n\u0001\u0002l\u0013\u0003\u0002\u0002",
    "\u0002mn\u0007\u0018\u0002\u0002no\b\u000b\u0001\u0002ov\u0007\u0014",
    "\u0002\u0002pq\b\u000b\u0001\u0002qr\u0005\u001a\u000e\u0002rs\b\u000b",
    "\u0001\u0002sw\u0003\u0002\u0002\u0002tu\u0007\u0017\u0002\u0002uw\b",
    "\u000b\u0001\u0002vp\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002",
    "wx\u0003\u0002\u0002\u0002xy\u0007\u0012\u0002\u0002yz\b\u000b\u0001",
    "\u0002z\u0015\u0003\u0002\u0002\u0002{|\u0007\u000b\u0002\u0002|}\u0005",
    "\u0018\r\u0002}~\u0007\f\u0002\u0002~\u007f\u0007\u0010\u0002\u0002",
    "\u007f\u0080\u0005\n\u0006\u0002\u0080\u0087\u0007\u0011\u0002\u0002",
    "\u0081\u0082\u0007\r\u0002\u0002\u0082\u0083\u0007\u0010\u0002\u0002",
    "\u0083\u0084\u0005\n\u0006\u0002\u0084\u0085\b\f\u0001\u0002\u0085\u0086",
    "\u0007\u0011\u0002\u0002\u0086\u0088\u0003\u0002\u0002\u0002\u0087\u0081",
    "\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0089",
    "\u0003\u0002\u0002\u0002\u0089\u008a\b\f\u0001\u0002\u008a\u0017\u0003",
    "\u0002\u0002\u0002\u008b\u008c\u0007\u000e\u0002\u0002\u008c\u008d\u0007",
    "\u0018\u0002\u0002\u008d\u008e\b\r\u0001\u0002\u008e\u008f\u0007\u0016",
    "\u0002\u0002\u008f\u0094\b\r\u0001\u0002\u0090\u0091\u0007\u0018\u0002",
    "\u0002\u0091\u0095\b\r\u0001\u0002\u0092\u0093\u0007\u0019\u0002\u0002",
    "\u0093\u0095\b\r\u0001\u0002\u0094\u0090\u0003\u0002\u0002\u0002\u0094",
    "\u0092\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096",
    "\u0097\u0007\u000f\u0002\u0002\u0097\u0098\b\r\u0001\u0002\u0098\u0019",
    "\u0003\u0002\u0002\u0002\u0099\u009a\u0005\u001c\u000f\u0002\u009a\u009b",
    "\u0007\u0013\u0002\u0002\u009b\u009c\b\u000e\u0001\u0002\u009c\u009d",
    "\u0005\u001a\u000e\u0002\u009d\u00a0\u0003\u0002\u0002\u0002\u009e\u00a0",
    "\u0005\u001c\u000f\u0002\u009f\u0099\u0003\u0002\u0002\u0002\u009f\u009e",
    "\u0003\u0002\u0002\u0002\u00a0\u001b\u0003\u0002\u0002\u0002\u00a1\u00a2",
    "\u0007\u0018\u0002\u0002\u00a2\u00aa\b\u000f\u0001\u0002\u00a3\u00a4",
    "\u0007\u0019\u0002\u0002\u00a4\u00aa\b\u000f\u0001\u0002\u00a5\u00a6",
    "\u0007\u000e\u0002\u0002\u00a6\u00a7\u0005\u001a\u000e\u0002\u00a7\u00a8",
    "\u0007\u000f\u0002\u0002\u00a8\u00aa\u0003\u0002\u0002\u0002\u00a9\u00a1",
    "\u0003\u0002\u0002\u0002\u00a9\u00a3\u0003\u0002\u0002\u0002\u00a9\u00a5",
    "\u0003\u0002\u0002\u0002\u00aa\u001d\u0003\u0002\u0002\u0002\r\".9D",
    "Mgv\u0087\u0094\u009f\u00a9"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class isiLanguageParser extends antlr4.Parser {

    static grammarFileName = "isiLanguage.g4";
    static literalNames = [ null, "'programa'", "'fimprog.'", "'declare'", 
                            "'numero'", "'texto'", "'enquanto'", "'leia'", 
                            "'escreva'", "'se'", "'entao'", "'senao'", "'('", 
                            "')'", "'{'", "'}'", "'.'", null, "':='", "','" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "PS_OP", "PS_CL", "CB_OP", 
                             "CB_CL", "DOT", "MATH", "ATTR", "COMMA", "REL", 
                             "TEXTO", "ID", "NUMBER", "WS" ];
    static ruleNames = [ "prog", "decl", "declaraID", "tipo", "bloco", "cmd", 
                         "cmd_loop", "cmd_leitura", "cmd_escrita", "cmd_attrib", 
                         "cmd_condicional", "expr_condicional", "expr", 
                         "termo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = isiLanguageParser.ruleNames;
        this.literalNames = isiLanguageParser.literalNames;
        this.symbolicNames = isiLanguageParser.symbolicNames;

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

    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, isiLanguageParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(isiLanguageParser.T__0);
	        this.state = 30; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 29;
	            this.decl();
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===isiLanguageParser.T__2);
	        this.state = 34;
	        this.bloco();
	        this.state = 35;
	        this.match(isiLanguageParser.T__1);

	                    this.tudoInicializado();
	                    this.tudoUtilizado();

	                    this.listaDeclaracao = [new Bloco(this.listaDeclaracao)];
	                    this.programa = new Programa(this.listaDeclaracao, this.pilha.pop())

	                    this.programa.compile()
	                
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decl() {
	    let localctx = new DeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, isiLanguageParser.RULE_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(isiLanguageParser.T__2);
	        this.state = 39;
	        this.tipo();

	                    this.varTipo = this.pegueToken();
	                    this.listaNomes = [];
	                
	        this.state = 42; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 41;
	        		this.declaraID();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 44; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	         this.listaDeclaracao.push(new Declare(this.listaNomes, this.varTipo)) 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaraID() {
	    let localctx = new DeclaraIDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, isiLanguageParser.RULE_declaraID);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(isiLanguageParser.ID);

	                    this.declaraVar()
	                    this.listaNomes.push(this.pegueToken())
	                
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===isiLanguageParser.COMMA) {
	            this.state = 50;
	            this.match(isiLanguageParser.COMMA);
	            this.state = 51;
	            this.match(isiLanguageParser.ID);

	                        this.declaraVar()
	                        this.listaNomes.push(this.pegueToken())
	                    
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 58;
	        this.match(isiLanguageParser.DOT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, isiLanguageParser.RULE_tipo);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        _la = this._input.LA(1);
	        if(!(_la===isiLanguageParser.T__3 || _la===isiLanguageParser.T__4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloco() {
	    let localctx = new BlocoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, isiLanguageParser.RULE_bloco);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);

	                    this.currThread = [];
	                    this.pilha.push(this.currThread);
	                
	        this.state = 64; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 63;
	            this.cmd();
	            this.state = 66; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << isiLanguageParser.T__5) | (1 << isiLanguageParser.T__6) | (1 << isiLanguageParser.T__7) | (1 << isiLanguageParser.T__8) | (1 << isiLanguageParser.ID))) !== 0));

	                    this.listaComandos = this.pilha.pop()
	                    this.pilha.push([new Bloco(this.listaComandos)]);
	                
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cmd() {
	    let localctx = new CmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, isiLanguageParser.RULE_cmd);
	    try {
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case isiLanguageParser.T__6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.cmd_leitura();
	            break;
	        case isiLanguageParser.T__7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.cmd_escrita();
	            break;
	        case isiLanguageParser.ID:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 72;
	            this.cmd_attrib();
	            break;
	        case isiLanguageParser.T__8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 73;
	            this.cmd_condicional();
	            break;
	        case isiLanguageParser.T__5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 74;
	            this.cmd_loop();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cmd_loop() {
	    let localctx = new Cmd_loopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, isiLanguageParser.RULE_cmd_loop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(isiLanguageParser.T__5);
	        this.state = 78;
	        this.expr_condicional();
	        this.state = 79;
	        this.match(isiLanguageParser.CB_OP);
	        this.state = 80;
	        this.bloco();

	                    this.listaEnquanto = this.pilha.pop()
	                    this.exprCond = this.condStack.pop()
	                    this.pilha.peek().push(new Enquanto(this.exprCond, this.listaEnquanto))
	                
	        this.state = 82;
	        this.match(isiLanguageParser.CB_CL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cmd_leitura() {
	    let localctx = new Cmd_leituraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, isiLanguageParser.RULE_cmd_leitura);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(isiLanguageParser.T__6);
	        this.state = 85;
	        this.match(isiLanguageParser.PS_OP);
	        this.state = 86;
	        this.match(isiLanguageParser.ID);

	                    this.varNome = this.pegueToken()
	                    this.verificaDeclarada(this.varNome)
	                    this.inicializa(this.varNome)
	                    this.pilha.peek().push(new Leitura(this.tabSim.table[this.varNome]))
	                
	        this.state = 88;
	        this.match(isiLanguageParser.PS_CL);
	        this.state = 89;
	        this.match(isiLanguageParser.DOT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cmd_escrita() {
	    let localctx = new Cmd_escritaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, isiLanguageParser.RULE_cmd_escrita);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(isiLanguageParser.T__7);
	        this.state = 92;
	        this.match(isiLanguageParser.PS_OP);
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 93;
	            this.match(isiLanguageParser.ID);

	                        this.varNome = this.pegueToken()
	                        this.verificaVar(this.varNome)

	                        this.utiliza(this.varNome)
	                        this.varTipo = this.getTipoVar(this.varNome)

	                        this.valor = this.varNome
	                    
	            break;

	        case 2:
	            this.state = 95;
	            this.match(isiLanguageParser.TEXTO);

	                        this.varTipo = 'texto';
	                        this.valor = this.pegueToken();
	                    
	            break;

	        case 3:
	             this.expressao = ''; 
	            this.state = 98;
	            this.expr();

	                        this.varTipo = 'numero';
	                        this.valor = this.expressao;
	                    
	            break;

	        }
	        this.state = 103;
	        this.match(isiLanguageParser.PS_CL);
	        this.state = 104;
	        this.match(isiLanguageParser.DOT);
	         this.pilha.peek().push(new Escreve(this.valor, this.varTipo)) 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cmd_attrib() {
	    let localctx = new Cmd_attribContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, isiLanguageParser.RULE_cmd_attrib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(isiLanguageParser.ID);

	                    this.varNomeAtrib = this.pegueToken()
	                    this.verificaDeclarada(this.varNomeAtrib)
	                
	        this.state = 109;
	        this.match(isiLanguageParser.ATTR);
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case isiLanguageParser.PS_OP:
	        case isiLanguageParser.ID:
	        case isiLanguageParser.NUMBER:
	             this.expressao = '' 
	            this.state = 111;
	            this.expr();

	                        this.verificaTipo(this.varNomeAtrib, 'numero')
	                        this.valor = this.expressao
	                    
	            break;
	        case isiLanguageParser.TEXTO:
	            this.state = 114;
	            this.match(isiLanguageParser.TEXTO);

	                        this.verificaTipo(this.varNomeAtrib, 'texto')
	                        this.valor = this.pegueToken()
	                    
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 118;
	        this.match(isiLanguageParser.DOT);

	                    this.inicializa(this.varNomeAtrib)
	                    this.pilha.peek().push(new Atribuicao(this.varNomeAtrib, this.valor))
	                
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cmd_condicional() {
	    let localctx = new Cmd_condicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, isiLanguageParser.RULE_cmd_condicional);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(isiLanguageParser.T__8);
	        this.state = 122;
	        this.expr_condicional();
	        this.state = 123;
	        this.match(isiLanguageParser.T__9);
	        this.state = 124;
	        this.match(isiLanguageParser.CB_OP);
	        this.state = 125;
	        this.bloco();
	        this.state = 126;
	        this.match(isiLanguageParser.CB_CL);
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===isiLanguageParser.T__10) {
	            this.state = 127;
	            this.match(isiLanguageParser.T__10);
	            this.state = 128;
	            this.match(isiLanguageParser.CB_OP);
	            this.state = 129;
	            this.bloco();
	             this.listaFalse = this.pilha.pop() 
	            this.state = 131;
	            this.match(isiLanguageParser.CB_CL);
	        }


	                    this.listaTrue = this.pilha.pop()
	                    this.exprCond = this.condStack.pop()
	                    this.pilha.peek().push(new Condicional(this.exprCond, this.listaTrue, this.listaFalse || []))
	                    this.listaTrue = [];
	                    this.listaFalse = [];
	                
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr_condicional() {
	    let localctx = new Expr_condicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, isiLanguageParser.RULE_expr_condicional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(isiLanguageParser.PS_OP);
	        this.state = 138;
	        this.match(isiLanguageParser.ID);

	                    this.varNome = this.pegueToken();
	                    this.varTipo = this.getTipoVar(this.varNome);
	                    this.utiliza(this.varNome);
	                    this.exprCond = this.varNome;
	                
	        this.state = 140;
	        this.match(isiLanguageParser.REL);

	                    this.relSuportaTipo(this.pegueToken(), this.varTipo)
	                    this.exprCond += " " + this.pegueToken();
	                
	        this.state = 146;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case isiLanguageParser.ID:
	            this.state = 142;
	            this.match(isiLanguageParser.ID);

	                        this.varNome = this.pegueToken()
	                        this.verificaVar(this.varNome, this.varTipo)
	                        this.utiliza(this.varNome)
	                        this.exprCond += " " + this.varNome;
	                    
	            break;
	        case isiLanguageParser.NUMBER:
	            this.state = 144;
	            this.match(isiLanguageParser.NUMBER);

	                        this.verificaVar(this.varNome, this.varTipo)
	                        this.exprCond += " " + this.pegueToken();
	                    
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 148;
	        this.match(isiLanguageParser.PS_CL);
	         this.condStack.push(this.exprCond) 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, isiLanguageParser.RULE_expr);
	    try {
	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.termo();
	            this.state = 152;
	            this.match(isiLanguageParser.MATH);
	             this.expressao += ' ' + this.pegueToken() 
	            this.state = 154;
	            this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
	            this.termo();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termo() {
	    let localctx = new TermoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, isiLanguageParser.RULE_termo);
	    try {
	        this.state = 167;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case isiLanguageParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            this.match(isiLanguageParser.ID);

	                        this.varNome = this.pegueToken()
	                        this.verificaVar(this.varNome)
	                        this.verificaTipo(this.varNome, 'numero')
	                        this.utiliza(this.varNome)
	                        this.expressao += ' ' + this.pegueToken()
	                    
	            break;
	        case isiLanguageParser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.match(isiLanguageParser.NUMBER);
	             this.expressao += ' ' + this.pegueToken() 
	            break;
	        case isiLanguageParser.PS_OP:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 163;
	            this.match(isiLanguageParser.PS_OP);
	            this.state = 164;
	            this.expr();
	            this.state = 165;
	            this.match(isiLanguageParser.PS_CL);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

isiLanguageParser.EOF = antlr4.Token.EOF;
isiLanguageParser.T__0 = 1;
isiLanguageParser.T__1 = 2;
isiLanguageParser.T__2 = 3;
isiLanguageParser.T__3 = 4;
isiLanguageParser.T__4 = 5;
isiLanguageParser.T__5 = 6;
isiLanguageParser.T__6 = 7;
isiLanguageParser.T__7 = 8;
isiLanguageParser.T__8 = 9;
isiLanguageParser.T__9 = 10;
isiLanguageParser.T__10 = 11;
isiLanguageParser.PS_OP = 12;
isiLanguageParser.PS_CL = 13;
isiLanguageParser.CB_OP = 14;
isiLanguageParser.CB_CL = 15;
isiLanguageParser.DOT = 16;
isiLanguageParser.MATH = 17;
isiLanguageParser.ATTR = 18;
isiLanguageParser.COMMA = 19;
isiLanguageParser.REL = 20;
isiLanguageParser.TEXTO = 21;
isiLanguageParser.ID = 22;
isiLanguageParser.NUMBER = 23;
isiLanguageParser.WS = 24;

isiLanguageParser.RULE_prog = 0;
isiLanguageParser.RULE_decl = 1;
isiLanguageParser.RULE_declaraID = 2;
isiLanguageParser.RULE_tipo = 3;
isiLanguageParser.RULE_bloco = 4;
isiLanguageParser.RULE_cmd = 5;
isiLanguageParser.RULE_cmd_loop = 6;
isiLanguageParser.RULE_cmd_leitura = 7;
isiLanguageParser.RULE_cmd_escrita = 8;
isiLanguageParser.RULE_cmd_attrib = 9;
isiLanguageParser.RULE_cmd_condicional = 10;
isiLanguageParser.RULE_expr_condicional = 11;
isiLanguageParser.RULE_expr = 12;
isiLanguageParser.RULE_termo = 13;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_prog;
    }

	bloco() {
	    return this.getTypedRuleContext(BlocoContext,0);
	};

	decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclContext);
	    } else {
	        return this.getTypedRuleContext(DeclContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitProg(this);
		}
	}


}



class DeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_decl;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	declaraID = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaraIDContext);
	    } else {
	        return this.getTypedRuleContext(DeclaraIDContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitDecl(this);
		}
	}


}



class DeclaraIDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_declaraID;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(isiLanguageParser.ID);
	    } else {
	        return this.getToken(isiLanguageParser.ID, i);
	    }
	};


	DOT() {
	    return this.getToken(isiLanguageParser.DOT, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(isiLanguageParser.COMMA);
	    } else {
	        return this.getToken(isiLanguageParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterDeclaraID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitDeclaraID(this);
		}
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_tipo;
    }


	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitTipo(this);
		}
	}


}



class BlocoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_bloco;
    }

	cmd = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CmdContext);
	    } else {
	        return this.getTypedRuleContext(CmdContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterBloco(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitBloco(this);
		}
	}


}



class CmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_cmd;
    }

	cmd_leitura() {
	    return this.getTypedRuleContext(Cmd_leituraContext,0);
	};

	cmd_escrita() {
	    return this.getTypedRuleContext(Cmd_escritaContext,0);
	};

	cmd_attrib() {
	    return this.getTypedRuleContext(Cmd_attribContext,0);
	};

	cmd_condicional() {
	    return this.getTypedRuleContext(Cmd_condicionalContext,0);
	};

	cmd_loop() {
	    return this.getTypedRuleContext(Cmd_loopContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitCmd(this);
		}
	}


}



class Cmd_loopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_cmd_loop;
    }

	expr_condicional() {
	    return this.getTypedRuleContext(Expr_condicionalContext,0);
	};

	CB_OP() {
	    return this.getToken(isiLanguageParser.CB_OP, 0);
	};

	bloco() {
	    return this.getTypedRuleContext(BlocoContext,0);
	};

	CB_CL() {
	    return this.getToken(isiLanguageParser.CB_CL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterCmd_loop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitCmd_loop(this);
		}
	}


}



class Cmd_leituraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_cmd_leitura;
    }

	PS_OP() {
	    return this.getToken(isiLanguageParser.PS_OP, 0);
	};

	ID() {
	    return this.getToken(isiLanguageParser.ID, 0);
	};

	PS_CL() {
	    return this.getToken(isiLanguageParser.PS_CL, 0);
	};

	DOT() {
	    return this.getToken(isiLanguageParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterCmd_leitura(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitCmd_leitura(this);
		}
	}


}



class Cmd_escritaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_cmd_escrita;
    }

	PS_OP() {
	    return this.getToken(isiLanguageParser.PS_OP, 0);
	};

	PS_CL() {
	    return this.getToken(isiLanguageParser.PS_CL, 0);
	};

	DOT() {
	    return this.getToken(isiLanguageParser.DOT, 0);
	};

	ID() {
	    return this.getToken(isiLanguageParser.ID, 0);
	};

	TEXTO() {
	    return this.getToken(isiLanguageParser.TEXTO, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterCmd_escrita(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitCmd_escrita(this);
		}
	}


}



class Cmd_attribContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_cmd_attrib;
    }

	ID() {
	    return this.getToken(isiLanguageParser.ID, 0);
	};

	ATTR() {
	    return this.getToken(isiLanguageParser.ATTR, 0);
	};

	DOT() {
	    return this.getToken(isiLanguageParser.DOT, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	TEXTO() {
	    return this.getToken(isiLanguageParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterCmd_attrib(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitCmd_attrib(this);
		}
	}


}



class Cmd_condicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_cmd_condicional;
    }

	expr_condicional() {
	    return this.getTypedRuleContext(Expr_condicionalContext,0);
	};

	CB_OP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(isiLanguageParser.CB_OP);
	    } else {
	        return this.getToken(isiLanguageParser.CB_OP, i);
	    }
	};


	bloco = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlocoContext);
	    } else {
	        return this.getTypedRuleContext(BlocoContext,i);
	    }
	};

	CB_CL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(isiLanguageParser.CB_CL);
	    } else {
	        return this.getToken(isiLanguageParser.CB_CL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterCmd_condicional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitCmd_condicional(this);
		}
	}


}



class Expr_condicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_expr_condicional;
    }

	PS_OP() {
	    return this.getToken(isiLanguageParser.PS_OP, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(isiLanguageParser.ID);
	    } else {
	        return this.getToken(isiLanguageParser.ID, i);
	    }
	};


	REL() {
	    return this.getToken(isiLanguageParser.REL, 0);
	};

	PS_CL() {
	    return this.getToken(isiLanguageParser.PS_CL, 0);
	};

	NUMBER() {
	    return this.getToken(isiLanguageParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterExpr_condicional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitExpr_condicional(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_expr;
    }

	termo() {
	    return this.getTypedRuleContext(TermoContext,0);
	};

	MATH() {
	    return this.getToken(isiLanguageParser.MATH, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitExpr(this);
		}
	}


}



class TermoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = isiLanguageParser.RULE_termo;
    }

	ID() {
	    return this.getToken(isiLanguageParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(isiLanguageParser.NUMBER, 0);
	};

	PS_OP() {
	    return this.getToken(isiLanguageParser.PS_OP, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PS_CL() {
	    return this.getToken(isiLanguageParser.PS_CL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.enterTermo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof isiLanguageListener ) {
	        listener.exitTermo(this);
		}
	}


}




isiLanguageParser.ProgContext = ProgContext; 
isiLanguageParser.DeclContext = DeclContext; 
isiLanguageParser.DeclaraIDContext = DeclaraIDContext; 
isiLanguageParser.TipoContext = TipoContext; 
isiLanguageParser.BlocoContext = BlocoContext; 
isiLanguageParser.CmdContext = CmdContext; 
isiLanguageParser.Cmd_loopContext = Cmd_loopContext; 
isiLanguageParser.Cmd_leituraContext = Cmd_leituraContext; 
isiLanguageParser.Cmd_escritaContext = Cmd_escritaContext; 
isiLanguageParser.Cmd_attribContext = Cmd_attribContext; 
isiLanguageParser.Cmd_condicionalContext = Cmd_condicionalContext; 
isiLanguageParser.Expr_condicionalContext = Expr_condicionalContext; 
isiLanguageParser.ExprContext = ExprContext; 
isiLanguageParser.TermoContext = TermoContext; 
