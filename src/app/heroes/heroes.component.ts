import { MessageService } from './../services/message.service';
import { HeroService } from '../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from "../models/hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
    this.messageService.add(`HerosComponent: Selected hero id=${hero.id}`)
  }
}
