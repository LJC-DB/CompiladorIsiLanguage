'use-strict';

export class Symbol {
  constructor(nome, tipo, valor) {
      this.nome = nome
      this.tipo = tipo
      this.valor = valor
  }
}

export class SemanticError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

export class SymbolTable {
  table = {};

  addSymbol(key, value) {
    if (key in this.table) throw new SemanticError(`Variável "${key}" já foi declarada`);

    this.table[key] = value;
  }

  existSymbol(key) {
    return key in this.table;
  }
}
