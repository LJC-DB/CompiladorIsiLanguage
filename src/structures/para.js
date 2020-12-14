export class Para {
    constructor(attr1, exprCond, attr2) {
        this.attr1 = attr1;
        this.exprCond = exprCond;
        this.attr2 = attr2;
    }

    adicionaBloco(bloco) {
        this.bloco = bloco.pop();
    }

    generateCode() {
        return 'for('
             + (this.attr1 ? this.attr1.generateCode().replace(';\n', '') : '')
             + '; '
             + (this.exprCond || '')
             + '; '
             + (this.attr2 ? this.attr2.generateCode().replace(';\n', '') : '')
             + ') {\n'
             + this.bloco.generateCode()
             + '}\n';
    }
}
