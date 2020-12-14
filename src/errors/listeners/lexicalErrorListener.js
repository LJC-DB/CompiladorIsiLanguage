import antlr4 from 'antlr4';
import { LexicalError } from '../lexicalError.js';

export class LexicalErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        const mensagem = msg.replace(/.*:/, 'token não reconhecido:');
        throw new LexicalError("linha " + line + ":" + column + " - " + mensagem);
    }
}
