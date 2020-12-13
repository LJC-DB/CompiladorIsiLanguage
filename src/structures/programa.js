import fs from 'fs';
export class Programa {
  constructor(listaDeclaracao, listaComandos){
    this.listaDeclaracao = listaDeclaracao;
    this.listaComandos = listaComandos;
  }


  compile() {

    const code = `#include <stdio.h>

void main(void) {
${this.listaDeclaracao.map(d => d.generateCode()).join('')}
${this.listaComandos.map(c => c.generateCode()).join('\n')}}`;

    fs.writeFileSync('compiladao.c', code);
  }
}
