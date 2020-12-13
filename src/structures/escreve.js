export class Escreve {
  constructor(texto, tipo) {

    this.texto = texto;
    this.tipo = tipo;
  }

  mapper = {
    'numero': 'f',
    'texto': 's',
  };

  generateCode() {
    return `printf("%${this.mapper[this.tipo]}\\n", ${this.texto});\n`;
  }
}
