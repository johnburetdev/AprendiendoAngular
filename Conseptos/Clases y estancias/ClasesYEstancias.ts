// Definicion de una clase
class Avenger {

    nombre:string;
    equipo:string;
    nombreReal:string;
    puedePelear:boolean;
    peleasGanadas:number;

  //Definicion de constructor es necesaria
  // para que poder pasarle los datos a nuestra clase 
    constructor( nombre:string, 
        equipo:string, 
        nombreReal:string, 
        puedePelear:boolean, 
        peleasGanadas:number
    ){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    
    }
}


//Intanciar una clase
let antmas:Avenger = new Avenger("Iron Man", "strak","Tony Stark", true, 1);


