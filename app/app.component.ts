import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';
import { NewKegComponent } from './new-keg.component';
import { KegComponent } from './keg.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Welcome to Bailey's Taproom!</h1>
      <keg-list [kegList]="kegs"></keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Winchester Brown", "Backwoods", 6.2, "$4", 11),
      new Keg("IPA 97", "Silver Moon", 7.0, "$4", 124),
      new Keg("Noggin’ Floggin'", "Hopworks 2011", 11.0, "$8", 124)
    ];
  }
}
