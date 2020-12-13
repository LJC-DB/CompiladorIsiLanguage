export class Condicional {
    constructor(condicao, listaT, listaF) {
        this.condicao = condicao;
        this.listaTrue = listaT;
        this.listaFalse = listaF;
    }

    generateCode() {
        let code = '';
        code += `if (${this.condicao}) {\n`;
        code += this.listaTrue.map(cmd => cmd.generateCode()).join('') + '}\n';
        if (this.listaFalse.length !== 0) code += `else {\n${this.listaFalse.map(cmd => cmd.generateCode()).join('')}}\n`;
        return code;
    }
}
