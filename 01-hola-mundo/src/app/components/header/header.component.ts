/*Creando mi componente header de forma manual: creamos el archivo header.component.ts y el header.component.html
importamos y usamos el decorador y le declaromos sus propiedades aqui
y en el header.component.html ponemos nuestro html 
Para crear lo de manera automatica en el cmd se ejecuta ng g c carpetadonde se creara/nombredelcomp*/

import { Component } from '@angular/core';
//Decorador
@Component({
 //DEFINIR EL SELECTOR QUE ES DECIRLE AL DECORADOR, QUE CUANDO LO ENCUENTRE HAGA LO QUE SE LE PIDE

 selector: 'app-header', //Es buena practica ponerle app para saber que es algo personalizado
 /* template: `<h1>Header Component</h1>`, */ /* <!-- Esto se hace cuando es un componente de pocas lineas de lo contrario se hace aparte --> */
 templateUrl: './header.component.html' //Esto es usar el componente en otra pag. html
})
export class HeaderComponent{

}