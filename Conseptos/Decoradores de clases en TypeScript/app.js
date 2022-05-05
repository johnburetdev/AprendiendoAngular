"use strict";
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function consola(constructor) {
    console.log(constructor);
}
//Este es el decorador que lo que hace es mandar el constructor a la fuerza
let Villano = class Villano {
    //Esto es lo mismo que crearlas y luego inicializarlas
    constructor(nombre) {
        this.nombre = nombre;
    }
};
Villano = __decorate([
    consola
], Villano);
//Para eliiminar el warning que sale poe el decorador lo que se hace es lo siguente:
// Agregamos "experimentalDecorators": true en el archivo tsconfig.json