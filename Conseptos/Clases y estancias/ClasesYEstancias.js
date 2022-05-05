"use strict";
// Definicion de una clase
class Avenger {
    //Definicion de constructor es necesaria
    // para que poder pasarle los datos a nuestra clase 
    constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
}
//Intanciar una clase
let antmas = new Avenger("Iron Man", "strak", "Tony Stark", true, 1);
