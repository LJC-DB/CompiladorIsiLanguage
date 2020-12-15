export class Atribuicao {
    constructor(variavel, valor) {

        this.variavel = variavel;
        this.valor = valor;
    }
    generateCode() {
        if (this.variavel.tipo === 'numero')
            return `${this.variavel.nome} =${this.valor};\n`;
        return `strcpy(${this.variavel.nome}, ${this.valor});\n`;
    }
}