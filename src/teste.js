import { Bloco } from './structures/programa.js'
import { Atribuicao } from './structures/atribuicao.js';
import { Condicional } from './structures/condicional.js';
import { Declare } from './structures/declare.js';
import { Enquanto } from './structures/enquanto.js';
import { Escreve } from './structures/escreve.js';
import { Leitura } from './structures/leitura.js';
import { Pilha } from './utils/pilha.js';

const a = new Escreve("batata", "texto");

const l = new Leitura({tipo: 'texto', nome: 'arroz'});
// const e = new Enquanto('a > l', [a.generateCode(), l.generateCode()]);

const bloco = new Bloco([a,l], 1)

// console.log(a.generateCode());
// console.log(l.generateCode());
console.log(bloco.generateCode());
