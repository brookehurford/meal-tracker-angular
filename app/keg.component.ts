import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3 (click)="kegClicked(keg)">{{ keg.name }}
      <em>{{ keg.brand }}</em>
      {{ keg.alcoholContent }}% -- {{ keg.price }} <br>
      Pints Left: {{ keg.pintsLeft }}
    </h3>
    <button class="btn btn-success" (click)="kegWasSelected(keg)">Sell a pint</button>
  `
})

export class KegComponent {
  public keg: Keg;
  public kegList: Keg[];
  public filterLow: string = "all";
  kegWasSelected(clickedKeg: Keg): void {
    clickedKeg.pintsLeft--;
    // if(clickedKeg.pintsLeft <= 10){
    //   return this.keg.low;
    // }
  }
}
