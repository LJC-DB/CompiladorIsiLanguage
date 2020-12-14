import fs from 'fs';
import antlr4 from 'antlr4';

import MyGrammarLexer from './antlr4/isiLanguageLexer.js';
import MyGrammarParser from './antlr4/isiLanguageParser.js';
import { LexicalErrorListener } from './errors/listeners/lexicalErrorListener.js';
import { SyntacticErrorListener } from './errors/listeners/syntacticErrorListener.js';
import { SemanticError } from './errors/semanticError.js';
import { LexicalError } from './errors/lexicalError.js';
import { SyntacticError } from './errors/syntacticError.js';

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

lexer.removeErrorListeners();
parser.removeErrorListeners();

const syntacticListener = new SyntacticErrorListener();
const lexicalListener = new LexicalErrorListener();

lexer.addErrorListener(lexicalListener);
parser.addErrorListener(syntacticListener);

let tree;

try {
    tree = parser.prog();
} catch (e) {
    if (e instanceof SemanticError) {
        console.log('Erro semântico')
        console.log(e.message)
    }

    else if (e instanceof SyntacticError) {
        console.log('Erro sintático')
        console.log(e.message)
    }

    else if (e instanceof LexicalError) {
        console.log('Erro léxico')
        console.log(e.message);
    }

    else {
        console.log('Erro inesperado');
        console.log(e);
    }

    process.exit(1);
}

let compilado;

try {
    compilado = tree.parser.compile(destino);
} catch (e) {
    console.log("Erro inesperado ao compilar");
    console.log(e);
    process.exit(1);
}

try {
    fs.writeFileSync(`${destino}.c`, compilado);
} catch (e) {
    console.log("Erro ao escrever arquivo de destino");
    process.exit(1);
}
