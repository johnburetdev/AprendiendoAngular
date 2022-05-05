
function consola( constructor:Function ){
    console.log( constructor );
}

//Este es el decorador que lo que hace es mandar el constructor a la fuerza
@consola
class Villano{

    //Esto es lo mismo que crearlas y luego inicializarlas
    constructor (public nombre:string){

    }
}
//Para eliiminar el warning que sale poe el decorador lo que se hace es lo siguente:
// Agregamos "experimentalDecorators": true en el archivo tsconfig.json 