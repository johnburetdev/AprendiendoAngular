// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;
let PERSONAJE = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto

interface Heroe{
    nombre:string,
    artesMarciales:string[]
}
let batman:Heroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}


// Convertir esta funcion a una funcion de flecha
let resultadoDoble = ( a:number, b:number ) =>  (a + b) * 2;



// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};


// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero
class Rectagulo{

    constructor(public altura:number, public base:number){}
    calcularArea() {
        let area = (this.altura * this.base);
        console.log(`El area de su rectangulo es =  ${area}`);
}}

let rec = new Rectagulo(12, 5);
let rec2 = new Rectagulo(5, 5);
rec.calcularArea();
rec2.calcularArea();
