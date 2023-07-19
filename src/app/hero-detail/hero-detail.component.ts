import { Component, Input } from '@angular/core';
//import the interface of the parent into the child
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  //The HeroDetailComponent template binds to the component's hero property which is of type Hero
  @Input() hero?: Hero;
}
