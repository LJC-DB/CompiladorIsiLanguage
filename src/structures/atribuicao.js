export class Atribuicao {
    constructor(variavel, valor) {

        this.variavel = variavel;
        this.valor = valor;
    }
    generateCode() {
        return `${this.variavel} = ${this.valor};\n`;
    }
}