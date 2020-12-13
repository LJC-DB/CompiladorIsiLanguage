export class Leitura {
    constructor(variavel) {

        this.variavel = variavel;
    }

    mapper = {
        'numero': 'f',
        'texto': 's',
    };

    generateCode() {
        return `scanf("%${this.mapper[this.variavel.tipo]}", &${this.variavel.nome});\n`;
    }
}
