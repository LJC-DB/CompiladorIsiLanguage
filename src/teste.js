import { Escreve, Leitura } from './batata.js'

const a = new Escreve("batata");

const l = new Leitura({tipo: 'texto', nome: 'arroz'});

console.log(a.generateCode());
console.log(l.generateCode());
