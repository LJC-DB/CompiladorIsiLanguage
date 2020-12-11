// Generated from isiLanguage.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import isiLanguageListener from './isiLanguageListener.js';

    import { SymbolTable, Symbol, SemanticError } from '../batata.js'


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001a\u0097\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0006\u0003&\n\u0003\r\u0003\u000e\u0003\'\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004/\n\u0004\f\u0004",
    "\u000e\u00042\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0006\u00069\n\u0006\r\u0006\u000e\u0006:\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007B\n\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\bL\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\n_\n\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000bi\n\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0005\fu\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0006\f{\n\f\r\f\u000e",
    "\f|\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u0085\n",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u008c\n\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u0095\n\u000e\u0003\u000e\u0002\u0002\u000f\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002\u0003\u0003",
    "\u0002\u0006\u0007\u0002\u0099\u0002\u001c\u0003\u0002\u0002\u0002\u0004",
    "!\u0003\u0002\u0002\u0002\u0006)\u0003\u0002\u0002\u0002\b5\u0003\u0002",
    "\u0002\u0002\n8\u0003\u0002\u0002\u0002\fA\u0003\u0002\u0002\u0002\u000e",
    "C\u0003\u0002\u0002\u0002\u0010R\u0003\u0002\u0002\u0002\u0012Y\u0003",
    "\u0002\u0002\u0002\u0014c\u0003\u0002\u0002\u0002\u0016l\u0003\u0002",
    "\u0002\u0002\u0018\u008b\u0003\u0002\u0002\u0002\u001a\u0094\u0003\u0002",
    "\u0002\u0002\u001c\u001d\u0007\u0003\u0002\u0002\u001d\u001e\u0005\u0004",
    "\u0003\u0002\u001e\u001f\u0005\n\u0006\u0002\u001f \u0007\u0004\u0002",
    "\u0002 \u0003\u0003\u0002\u0002\u0002!\"\u0007\u0005\u0002\u0002\"#",
    "\u0005\b\u0005\u0002#%\b\u0003\u0001\u0002$&\u0005\u0006\u0004\u0002",
    "%$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'%\u0003\u0002",
    "\u0002\u0002\'(\u0003\u0002\u0002\u0002(\u0005\u0003\u0002\u0002\u0002",
    ")*\u0007\u0018\u0002\u0002*0\b\u0004\u0001\u0002+,\u0007\u0015\u0002",
    "\u0002,-\u0007\u0018\u0002\u0002-/\b\u0004\u0001\u0002.+\u0003\u0002",
    "\u0002\u0002/2\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u000201\u0003",
    "\u0002\u0002\u000213\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u0002",
    "34\u0007\u0012\u0002\u00024\u0007\u0003\u0002\u0002\u000256\t\u0002",
    "\u0002\u00026\t\u0003\u0002\u0002\u000279\u0005\f\u0007\u000287\u0003",
    "\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002",
    ":;\u0003\u0002\u0002\u0002;\u000b\u0003\u0002\u0002\u0002<B\u0005\u0010",
    "\t\u0002=B\u0005\u0012\n\u0002>B\u0005\u0014\u000b\u0002?B\u0005\u0016",
    "\f\u0002@B\u0005\u000e\b\u0002A<\u0003\u0002\u0002\u0002A=\u0003\u0002",
    "\u0002\u0002A>\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002A@\u0003",
    "\u0002\u0002\u0002B\r\u0003\u0002\u0002\u0002CD\u0007\b\u0002\u0002",
    "DE\u0007\u000e\u0002\u0002EF\u0007\u0018\u0002\u0002FG\b\b\u0001\u0002",
    "GK\u0007\u0016\u0002\u0002HI\u0007\u0018\u0002\u0002IL\b\b\u0001\u0002",
    "JL\u0007\u0019\u0002\u0002KH\u0003\u0002\u0002\u0002KJ\u0003\u0002\u0002",
    "\u0002LM\u0003\u0002\u0002\u0002MN\u0007\u000f\u0002\u0002NO\u0007\u0010",
    "\u0002\u0002OP\u0005\n\u0006\u0002PQ\u0007\u0011\u0002\u0002Q\u000f",
    "\u0003\u0002\u0002\u0002RS\u0007\t\u0002\u0002ST\u0007\u000e\u0002\u0002",
    "TU\u0007\u0018\u0002\u0002UV\b\t\u0001\u0002VW\u0007\u000f\u0002\u0002",
    "WX\u0007\u0012\u0002\u0002X\u0011\u0003\u0002\u0002\u0002YZ\u0007\n",
    "\u0002\u0002Z^\u0007\u000e\u0002\u0002[\\\u0007\u0018\u0002\u0002\\",
    "_\b\n\u0001\u0002]_\u0007\u0017\u0002\u0002^[\u0003\u0002\u0002\u0002",
    "^]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`a\u0007\u000f\u0002",
    "\u0002ab\u0007\u0012\u0002\u0002b\u0013\u0003\u0002\u0002\u0002cd\u0007",
    "\u0018\u0002\u0002de\b\u000b\u0001\u0002eh\u0007\u0014\u0002\u0002f",
    "i\u0005\u0018\r\u0002gi\u0007\u0017\u0002\u0002hf\u0003\u0002\u0002",
    "\u0002hg\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jk\u0007\u0012",
    "\u0002\u0002k\u0015\u0003\u0002\u0002\u0002lm\u0007\u000b\u0002\u0002",
    "mn\u0007\u000e\u0002\u0002no\u0007\u0018\u0002\u0002op\b\f\u0001\u0002",
    "pt\u0007\u0016\u0002\u0002qr\u0007\u0018\u0002\u0002ru\b\f\u0001\u0002",
    "su\u0007\u0019\u0002\u0002tq\u0003\u0002\u0002\u0002ts\u0003\u0002\u0002",
    "\u0002uv\u0003\u0002\u0002\u0002vw\u0007\u000f\u0002\u0002wx\u0007\f",
    "\u0002\u0002xz\u0007\u0010\u0002\u0002y{\u0005\f\u0007\u0002zy\u0003",
    "\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002",
    "|}\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0084\u0007\u0011",
    "\u0002\u0002\u007f\u0080\u0007\r\u0002\u0002\u0080\u0081\u0007\u0010",
    "\u0002\u0002\u0081\u0082\u0005\n\u0006\u0002\u0082\u0083\u0007\u0011",
    "\u0002\u0002\u0083\u0085\u0003\u0002\u0002\u0002\u0084\u007f\u0003\u0002",
    "\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0017\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0005\u001a\u000e\u0002\u0087\u0088\u0007\u0013",
    "\u0002\u0002\u0088\u0089\u0005\u0018\r\u0002\u0089\u008c\u0003\u0002",
    "\u0002\u0002\u008a\u008c\u0005\u001a\u000e\u0002\u008b\u0086\u0003\u0002",
    "\u0002\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008c\u0019\u0003\u0002",
    "\u0002\u0002\u008d\u008e\u0007\u0018\u0002\u0002\u008e\u0095\b\u000e",
    "\u0001\u0002\u008f\u0095\u0007\u0019\u0002\u0002\u0090\u0091\u0007\u000e",
    "\u0002\u0002\u0091\u0092\u0005\u0018\r\u0002\u0092\u0093\u0007\u000f",
    "\u0002\u0002\u0093\u0095\u0003\u0002\u0002\u0002\u0094\u008d\u0003\u0002",
    "\u0002\u0002\u0094\u008f\u0003\u0002\u0002\u0002\u0094\u0090\u0003\u0002",
    "\u0002\u0002\u0095\u001b\u0003\u0002\u0002\u0002\u000e\'0:AK^ht|\u0084",
    "\u008b\u0094"].join("");


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
                         "cmd_condicional", "expr", "termo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = isiLanguageParser.ruleNames;
        this.literalNames = isiLanguageParser.literalNames;
        this.symbolicNames = isiLanguageParser.symbolicNames;

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

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, isiLanguageParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(isiLanguageParser.T__0);
	        this.state = 27;
	        this.decl();
	        this.state = 28;
	        this.bloco();
	        this.state = 29;
	        this.match(isiLanguageParser.T__1);
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



	decl() {
	    let localctx = new DeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, isiLanguageParser.RULE_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(isiLanguageParser.T__2);
	        this.state = 32;
	        this.tipo();
	         this.varTipo = this.pegueToken() 
	        this.state = 35; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 34;
	        		this.declaraID();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 37; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
	        this.state = 39;
	        this.match(isiLanguageParser.ID);
	         this.declaraVar() 
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===isiLanguageParser.COMMA) {
	            this.state = 41;
	            this.match(isiLanguageParser.COMMA);
	            this.state = 42;
	            this.match(isiLanguageParser.ID);
	             this.declaraVar() 
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
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
	        this.state = 51;
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
	        this.state = 54; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 53;
	            this.cmd();
	            this.state = 56; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << isiLanguageParser.T__5) | (1 << isiLanguageParser.T__6) | (1 << isiLanguageParser.T__7) | (1 << isiLanguageParser.T__8) | (1 << isiLanguageParser.ID))) !== 0));
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
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case isiLanguageParser.T__6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.cmd_leitura();
	            break;
	        case isiLanguageParser.T__7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.cmd_escrita();
	            break;
	        case isiLanguageParser.ID:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.cmd_attrib();
	            break;
	        case isiLanguageParser.T__8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 61;
	            this.cmd_condicional();
	            break;
	        case isiLanguageParser.T__5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 62;
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
	        this.state = 65;
	        this.match(isiLanguageParser.T__5);
	        this.state = 66;
	        this.match(isiLanguageParser.PS_OP);
	        this.state = 67;
	        this.match(isiLanguageParser.ID);

	                this.varNome = this.pegueToken()
	                this.verificaVar(this.varNome)
	                
	        this.state = 69;
	        this.match(isiLanguageParser.REL);
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case isiLanguageParser.ID:
	            this.state = 70;
	            this.match(isiLanguageParser.ID);

	                    this.varNome = this.pegueToken()
	                    this.verificaVar(this.varNome)
	                    
	            break;
	        case isiLanguageParser.NUMBER:
	            this.state = 72;
	            this.match(isiLanguageParser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 75;
	        this.match(isiLanguageParser.PS_CL);
	        this.state = 76;
	        this.match(isiLanguageParser.CB_OP);
	        this.state = 77;
	        this.bloco();
	        this.state = 78;
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
	        this.state = 80;
	        this.match(isiLanguageParser.T__6);
	        this.state = 81;
	        this.match(isiLanguageParser.PS_OP);
	        this.state = 82;
	        this.match(isiLanguageParser.ID);

	                this.varNome = this.pegueToken()
	                this.verificaVar(this.varNome)
	                
	        this.state = 84;
	        this.match(isiLanguageParser.PS_CL);
	        this.state = 85;
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
	        this.state = 87;
	        this.match(isiLanguageParser.T__7);
	        this.state = 88;
	        this.match(isiLanguageParser.PS_OP);
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case isiLanguageParser.ID:
	            this.state = 89;
	            this.match(isiLanguageParser.ID);

	                    this.varNome = this.pegueToken()
	                    this.verificaVar(this.varNome)
	                    
	            break;
	        case isiLanguageParser.TEXTO:
	            this.state = 91;
	            this.match(isiLanguageParser.TEXTO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 94;
	        this.match(isiLanguageParser.PS_CL);
	        this.state = 95;
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



	cmd_attrib() {
	    let localctx = new Cmd_attribContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, isiLanguageParser.RULE_cmd_attrib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(isiLanguageParser.ID);

	                this.varNome = this.pegueToken()
	                this.verificaVar(this.varNome)
	                
	        this.state = 99;
	        this.match(isiLanguageParser.ATTR);
	        this.state = 102;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case isiLanguageParser.PS_OP:
	        case isiLanguageParser.ID:
	        case isiLanguageParser.NUMBER:
	            this.state = 100;
	            this.expr();
	            break;
	        case isiLanguageParser.TEXTO:
	            this.state = 101;
	            this.match(isiLanguageParser.TEXTO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 104;
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



	cmd_condicional() {
	    let localctx = new Cmd_condicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, isiLanguageParser.RULE_cmd_condicional);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(isiLanguageParser.T__8);
	        this.state = 107;
	        this.match(isiLanguageParser.PS_OP);
	        this.state = 108;
	        this.match(isiLanguageParser.ID);

	                this.varNome = this.pegueToken()
	                this.verificaVar(this.varNome)
	                
	        this.state = 110;
	        this.match(isiLanguageParser.REL);
	        this.state = 114;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case isiLanguageParser.ID:
	            this.state = 111;
	            this.match(isiLanguageParser.ID);

	                    this.varNome = this.pegueToken()
	                    this.verificaVar(this.varNome)
	                    
	            break;
	        case isiLanguageParser.NUMBER:
	            this.state = 113;
	            this.match(isiLanguageParser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 116;
	        this.match(isiLanguageParser.PS_CL);
	        this.state = 117;
	        this.match(isiLanguageParser.T__9);
	        this.state = 118;
	        this.match(isiLanguageParser.CB_OP);
	        this.state = 120; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 119;
	            this.cmd();
	            this.state = 122; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << isiLanguageParser.T__5) | (1 << isiLanguageParser.T__6) | (1 << isiLanguageParser.T__7) | (1 << isiLanguageParser.T__8) | (1 << isiLanguageParser.ID))) !== 0));
	        this.state = 124;
	        this.match(isiLanguageParser.CB_CL);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===isiLanguageParser.T__10) {
	            this.state = 125;
	            this.match(isiLanguageParser.T__10);
	            this.state = 126;
	            this.match(isiLanguageParser.CB_OP);
	            this.state = 127;
	            this.bloco();
	            this.state = 128;
	            this.match(isiLanguageParser.CB_CL);
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, isiLanguageParser.RULE_expr);
	    try {
	        this.state = 137;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 132;
	            this.termo();
	            this.state = 133;
	            this.match(isiLanguageParser.MATH);
	            this.state = 134;
	            this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 136;
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
	    this.enterRule(localctx, 24, isiLanguageParser.RULE_termo);
	    try {
	        this.state = 146;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case isiLanguageParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 139;
	            this.match(isiLanguageParser.ID);

	                        this.varNome = this.pegueToken()
	                        this.verificaVar(this.varNome)
	                    
	            break;
	        case isiLanguageParser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 141;
	            this.match(isiLanguageParser.NUMBER);
	            break;
	        case isiLanguageParser.PS_OP:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 142;
	            this.match(isiLanguageParser.PS_OP);
	            this.state = 143;
	            this.expr();
	            this.state = 144;
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
isiLanguageParser.RULE_expr = 11;
isiLanguageParser.RULE_termo = 12;

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

	decl() {
	    return this.getTypedRuleContext(DeclContext,0);
	};

	bloco() {
	    return this.getTypedRuleContext(BlocoContext,0);
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

	CB_OP() {
	    return this.getToken(isiLanguageParser.CB_OP, 0);
	};

	bloco() {
	    return this.getTypedRuleContext(BlocoContext,0);
	};

	CB_CL() {
	    return this.getToken(isiLanguageParser.CB_CL, 0);
	};

	NUMBER() {
	    return this.getToken(isiLanguageParser.NUMBER, 0);
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


	NUMBER() {
	    return this.getToken(isiLanguageParser.NUMBER, 0);
	};

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

	bloco() {
	    return this.getTypedRuleContext(BlocoContext,0);
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
isiLanguageParser.ExprContext = ExprContext; 
isiLanguageParser.TermoContext = TermoContext; 
