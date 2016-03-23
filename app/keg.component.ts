import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3>
    {{ keg.name }}
      <em>{{ keg.brand }}</em>
      <span [class.alcohol]="keg.alcoholContent > 10">{{ keg.alcoholContent }}%</span> -- &#36;{{ keg.price }} <br>
      Pints Left: {{ keg.pintsLeft }}
    </h3>
    <button class="btn" (click)="kegWasSelected(keg)">Sell a pint</button>
  `
})

export class KegComponent {
  public keg: Keg;
  public kegList: Keg[];
  public filterLow: string = "all";
  kegWasSelected(clickedKeg: Keg): void {
    clickedKeg.pintsLeft--;
  }
}

// kegColor(): void {
//   if (this.keg.price < 5) {
//     this.keg (class.yellowFont);
//   }
// }
