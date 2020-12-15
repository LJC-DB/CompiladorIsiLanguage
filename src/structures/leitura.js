export class Leitura {
    constructor(variavel) {

        this.variavel = variavel;
    }


    generateCode() {
        if (this.variavel.tipo === 'numero')
            return `scanf("%f", &${this.variavel.nome});\n`;
        return `scanf("%s", ${this.variavel.nome});\n`;
    }
}
