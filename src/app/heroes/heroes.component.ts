import { Component, OnInit } from '@angular/core';
//import the interface
import { Hero } from '../hero';
//import the  data
import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  // Replace the definition of the heroes property with a declaration.
  // selectedHero?: Hero;
  heroes: Hero[] = [];
  // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  constructor(
    private heroService: HeroService // private messageService: MessageService
  ) {}
  // call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesCompnent: Selected hero id=${hero.id}`);
  // }

  // Create a method to retrieve the heroes from the service.
  // The HeroService.getHeroes method used to return a Hero[]. Now it returns an Observable<Hero[]>.
  // Observable.subscribe() is the critical difference.
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  // In response to a click event, call the component's click handler, add(), and then clear the input field so that it's ready for another name. Add the following to the HeroesComponent class:
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }
  //Although the component delegates hero deletion to the HeroService, it remains responsible for updating its own list of heroes. The component's delete() method immediately removes the hero-to-delete from that list, anticipating that the HeroService succeeds on the server.
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
