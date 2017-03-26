import { Component, Input, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: `my-app`,
  template: `
    <h1>{{title}}</h1>
    
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        (click)="onSelect(hero)"
        (mouseover)="log(hero)"
        [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styleUrls: ['./heroes-styles.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit  {
  title: string = `Tour of Heroes`;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }
  log = (hero:Hero) => console.log(hero);
}