import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  // outputs: ['onKegSelect'],
  template: `
    <div *ngFor="#keg of kegList">
      <h3 (click)="kegClicked(keg)">{{ keg.name }} <em>{{ keg.brand }}</em> {{ keg.alcoholContent }}% -- {{ keg.price }} <br>Pints Left: {{ keg.pintsLeft }}</h3>
      <button class="btn btn-success" (click)="kegWasSelected(keg)">Sell a pint</button>
    </div>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  kegWasSelected(clickedKeg: Keg): void {
    clickedKeg.pintsLeft--;
    console.log(clickedKeg.pintsLeft);
  }
}

// export class KegListComponent {
//   public kegList: Keg[];
//   public onKegSelect: EventEmitter<Keg>;
//   constructor() {
//     this.onKegSelect = new EventEmitter();
//   }
//   kegClicked(clickedKeg: Keg): void {
//     console.log('child', clickedKeg);
//     this.onKegSelect.emit(clickedKeg);
//   }
// }
