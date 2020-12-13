export class TabelaSimbolos {
    /**
     * @type Record<string, Symbol>
     */
    table = {};

    addSimbolo(key, symbol) {
        if (key in this.table) throw new SemanticError(`Variável "${key}" já foi declarada`);

        this.table[key] = symbol;
    }


    existeSimbolo(key) {
        return key in this.table;
    }
}