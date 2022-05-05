"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xmen = void 0;
class Xmen {
    constructor(nombre, clave) {
        this.nombre = nombre;
        this.clave = clave;
    }
    imprimir() {
        console.log(`${this.nombre} - ${this.clave} `);
    }
}
exports.Xmen = Xmen;
