import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() id:number = 0;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router:Router) { 

    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
     this.router.navigate( ['/heroe', this.id] )
    //this.heroeSeleccionado.emit(this.id);
  }

}
