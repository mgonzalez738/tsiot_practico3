module.exports = class Lista { 

    #elementos

    constructor() {
        this.#elementos = [];
    }
    
    push(clave, valor) {
        let elemento = {};
        elemento[clave] = valor;
        this.#elementos.push(elemento);
    }

    count() {
        console.log(this.#elementos);
        return this.#elementos.length;
    }

}