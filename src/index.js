import fs from 'fs';
import antlr4 from 'antlr4';
import MyGrammarLexer from './antlr4/isiLanguageLexer.js';
import MyGrammarParser from './antlr4/isiLanguageParser.js';
import MyGrammarListener from './antlr4/isiLanguageListener.js';

const fileName = process.argv[2];
const destino = process.argv[3];

if (!destino) {
    console.log('Informe o arquivo de destino');
    process.exit(1);
}

if (!fileName.endsWith('.isi')) {
    console.log('Arquivo deve ter extensão isi');
    process.exit(1);
}

if (!fs.existsSync(fileName)) {
    console.log(`Arquivo ${fileName} não encontrado`);
    process.exit(1);
}

let text;
try {
    text = fs.readFileSync(process.argv[2], 'utf-8');
} catch (e) {
    console.log(`Falha ao ler arquivo ${fileName}`);
    process.exit(1);
}

const input = text;
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;

const tree = parser.prog();
const compilado = tree.parser.compile(destino);

try {
    fs.writeFileSync(`${destino}.c`, compilado);
} catch (e) {
    console.log("Erro ao escrever arquivo de destino");
    process.exit(1);
}
