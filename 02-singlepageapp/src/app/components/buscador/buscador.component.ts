import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HearoesService } from 'src/app/service/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  termino:string = "";
  heroes:any[] = [];

  constructor( private activateRouter: ActivatedRoute,
               private _heroesService: HearoesService  ) { }

  ngOnInit(){

    this.activateRouter.params.subscribe( params =>{
    
      this.heroes = this._heroesService.buscarHeroe(  params['ter'] );
      this.termino = params['ter'];
    })
  }

}
