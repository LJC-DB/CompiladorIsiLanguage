import fs from 'fs';
import antlr4 from 'antlr4';
import MyGrammarLexer from './antlr4/isiLanguageLexer.js';
import MyGrammarParser from './antlr4/isiLanguageParser.js';
import MyGrammarListener from './antlr4/isiLanguageListener.js';

const text = fs.readFileSync('./programa.isi', 'utf-8');

const input = text;
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.prog();