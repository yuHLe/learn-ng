import { Component, Input } from '@angular/core';

import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: `Mr. Nice` },
  { id: 12, name: `Narco` },
  { id: 13, name: `Bombasto` },
  { id: 14, name: `Celeritas` },
  { id: 15, name: `Magneta` },
  { id: 16, name: `RubberMan` },
  { id: 17, name: `Dynama` },
  { id: 18, name: `Dr IQ` },
  { id: 19, name: `Magma` },
  { id: 20, name: `Tornado` }
];

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
  styleUrls: ['./heroes-styles.css']
})
export class AppComponent  {
  title: string = `Tour of Heroes`;
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }
  log = (hero:Hero) => console.log(hero);
}