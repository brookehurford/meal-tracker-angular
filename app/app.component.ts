import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Welcome to Bailey's Taproom!</h1>
      <h3 *ngFor="#keg of kegs">{{ keg.name }} <em>{{ keg.brand }}</em> {{ keg.alcoholContent }}% -- {{ keg.price }} <br>Pints Left: {{ keg.pintsLeft }}</h3>
    <div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Winchester Brown", "Backwoods", 6.2, "$4", 124),
      new Keg("IPA 97", "Silver Moon", 7.0, "$4", 124),
      new Keg("Noggin’ Floggin'", "Hopworks 2011", 11.0, "$8", 124)
    ];
  }
}
