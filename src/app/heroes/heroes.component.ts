import { Component, OnInit } from '@angular/core';
//import the interface
import { Hero } from '../hero';
//import the  data
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  // Replace the definition of the heroes property with a declaration.
  selectedHero?: Hero;
  heroes: Hero[] = [];
  // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  // call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesCompnent: Selected hero id=${hero.id}`);
  }

  // Create a method to retrieve the heroes from the service.
  // The HeroService.getHeroes method used to return a Hero[]. Now it returns an Observable<Hero[]>.
  // Observable.subscribe() is the critical difference.
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
