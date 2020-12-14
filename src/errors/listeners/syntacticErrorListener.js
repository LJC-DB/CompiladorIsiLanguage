import antlr4 from 'antlr4';
import { SyntacticError } from '../syntacticError.js';

export class SyntacticErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        const esperado = msg.replace(/.*expecting /, '');
        throw new SyntacticError("linha " + line + ":" + column + " - '" + offendingSymbol.text + "' inesperado. Esperava " + esperado);
    }
}
