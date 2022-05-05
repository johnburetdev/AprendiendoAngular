import { Component } from '@angular/core';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "John Buret";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  n = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: "Bruce",
    clave: "Batman",
    edad: 30,
    direccion: {
      calle: "Gotica",
      casa: "104"
    }
  }

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout( ()=>resolve('Llego la data'), 3500);
  })

  fecha = new Date();
  nombre2 = "joHN EnRRique buRet tEJeda";
  video = "AHdoQzjLegI";
  activar: boolean = true;
}
