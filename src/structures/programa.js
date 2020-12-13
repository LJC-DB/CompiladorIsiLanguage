export class Programa {
  constructor(listaDeclaracao, listaComandos){
    this.listaDeclaracao = listaDeclaracao;
    this.listaComandos = listaComandos;
  }


  compila() {
    return '#include <stdio.h>\n\n'
         + 'void main(void) {\n'
         + `${this.listaDeclaracao.map(d => d.generateCode()).join('')}\n`
         + `${this.listaComandos.map(c => c.generateCode()).join('\n')}}\n`;
  }
}
