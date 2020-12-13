export class Bloco {
  constructor(listaComandos) {
    this.listaComandos = listaComandos;
  }

  generateCode() {
    return this.listaComandos.map(cmd => {
      let identation = '    ';
      let code = cmd.generateCode();
      let parts = code.split('\n');
      let a = parts.slice(0, -1).join('\n' + identation) + '\n' + parts.slice(-1)
      return identation + a
    }).join('');
  }
}
