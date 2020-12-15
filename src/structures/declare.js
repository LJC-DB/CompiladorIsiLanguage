export class Declare {
    constructor(nomes, tipo) {

        this.nomes = nomes;
        this.tipo = tipo;
    }

    generateCode() {
        if (this.tipo === 'numero') {
            return `float ${this.nomes.join(', ')};\n`;
        }
        return `char ${this.nomes.join('[100], ')}[100];\n`;
    }
}