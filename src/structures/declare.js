export class Declare {
    constructor(nomes, tipo) {

        this.nomes = nomes;
        this.tipo = tipo;
    }

    mapper = {
        'numero': 'float',
        'texto': 'char*',
    };

    generateCode() {
        return `${this.mapper[this.tipo]} ${this.nomes.join(', ')};\n`;
    }
}