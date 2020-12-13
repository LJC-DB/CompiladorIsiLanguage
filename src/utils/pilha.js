export class Pilha {

    #lista;

    constructor(e) {
        this.#lista = e || []
    }

    pop() {
        return this.#lista.pop();
    }

    push(elem) {
        return this.#lista.push(elem);
    }

    peek() {
        return this.#lista[this.#lista.length - 1];
    }
}