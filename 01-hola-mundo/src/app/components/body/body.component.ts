//Creando mi componente header
import { Component } from '@angular/core';
//Decorador
@Component({
   selector: 'app-body', 
   templateUrl: './body.component.html' 
})
export class BodyComponent{

   mostrar:boolean = true;
   heroe:any ={
      nombre: 'Spiderman',
      frase: 'Pero tal vez la única forma de honrar a los muertos es aprovechar al máximo tu vida, ya sea que dure unos pocos años o... un siglo que transcurrió rápidamente. Lo intentaré, tío Ben, por ti'
   }

   vehiculos:string[] = ["Mercedez Benz clase E",
                         "Toyota Hilux", 
                         "Honda Accord", 
                         "Toyata Land Cruiser",
                         "Range Rover Verlar "];

}