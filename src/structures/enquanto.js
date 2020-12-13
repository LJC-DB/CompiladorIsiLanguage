export class Enquanto {
  constructor(condicao, lista) {

    this.condicao = condicao;
    this.lista = lista;
  }

  generateCode() {
    return `while (${this.condicao}) {\n${this.lista.map(cmd => cmd.generateCode()).join('')}}\n`;
  }
}
