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

    delete(clave) {
        for (var indice = 0; indice < this.#elementos.length; indice++) {
            if (Object.keys(this.#elementos[indice])[0] === clave) {
                this.#elementos.splice(indice, 1);
                return;
            }
        }
    }

    count() {
        return this.#elementos.length;
    }

    find(clave) {
        if(this.#elementos.length === 0)
            return NaN;
        let elemento = this.#elementos.find(el => Object.keys(el)[0] === clave);
        if(!elemento)
            return NaN;
        return elemento[clave];  
    }

}