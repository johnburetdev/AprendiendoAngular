"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Villano = void 0;
class Villano {
    constructor(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }
    imprimirPlan() {
        console.log(`${this.nombre} - ${this.plan} `);
    }
}
exports.Villano = Villano;
