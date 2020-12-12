'use-strict';

export class Symbol {
  constructor(nome, tipo, valor) {
      this.nome = nome;
      this.tipo = tipo;
      this.valor = valor;
      this.temValor = false;
      this.foiUtilizada = false;
  }
}

export class Comando {
  generateCode() {}
}


export class Escreve extends Comando {
  constructor(texto, tipo){
    super();
    this.texto = texto;
    this.tipo = tipo;
  }

  mapper = {
    'numero': 'f',
    'texto': 's',
  };

  generateCode() {
    return `printf(%${this.mapper[tipo]}\\n", ${this.texto});\n`;
  }
}

export class Leitura extends Comando {
  constructor(variavel){
    super();
    this.variavel = variavel;
  }

  mapper = {
    'numero': 'f',
    'texto': 's',
  };

  generateCode() {
    return `scanf("%${mapper[this.variavel.texto]}", *${this.variavel.nome});\n`;
  }
}

export class Declare extends Comando {
  constructor(nomes, tipo) {
    super();
    this.nomes = nomes;
    this.tipo = tipo;
  }

  mapper = {
    'numero': 'float',
    'texto': 'char*',
  };

  generateCode() {
    return `${this.mapper[tipo]} ${this.nomes.join(', ')};\n`;
  }
}

export class Atribuicao extends Comando {
    constructor(variavel, texto) {
    super();
      this.variavel = variavel;
      this.texto = texto;
    }
    generateCode() {
      return `${this.variavel} = ${this.texto};\n`;
    }
  }


// export class extends Comando {
//   constructor(){
    
//   }
//   generateCode() {
    
//   }
// }
export class Programa {
  generateTarget() {
    return `#include <stdio.h>

    void main(void) {

    }`;
  }
}

export class SemanticError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

export class SymbolTable {
  /** 
   * @type Record<string, Symbol>
   */
  table = {};

  addSymbol(key, symbol) {
    if (key in this.table) throw new SemanticError(`Variável "${key}" já foi declarada`);

    this.table[key] = symbol;
  }


  existSymbol(key) {
    return key in this.table;
  }
}
