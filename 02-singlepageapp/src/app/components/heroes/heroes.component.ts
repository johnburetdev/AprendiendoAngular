import { Component, OnInit } from '@angular/core';
import { HearoesService, Heroe } from '../../service/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  constructor( private _heroesService: HearoesService,
               private _router:Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( idx:number ){
    this._router.navigate( ['/heroe', idx] )
  }

}
