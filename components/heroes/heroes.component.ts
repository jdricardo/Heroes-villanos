import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroeService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this._heroeService.getHeroes();
  }

}
