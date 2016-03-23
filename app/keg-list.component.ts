import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { LowPipe } from './low.pipe';
import { PricePipe } from './price.pipe';
import { KegComponent } from './keg.component';
import { EditKegComponent } from './edit-keg.components';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  pipes: [LowPipe, PricePipe],
  directives: [NewKegComponent, KegComponent, EditKegComponent],
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all"  selected="selected">Show All</option>
      <option value="low">Kegs with less than 10 pints</option>
    </select>
    <select (change)="onChangePrice($event.target.value)" class="filter">
      <option value="all"  selected="selected">Show all</option>
      <option value="deal">Pints less than &#36; 5</option>
    </select>
    <keg-display *ngFor="#keg of kegList | low:filterLow | price:filterDeal"
    (click)="kegClicked(keg)"
    [class.selected]="keg === selectedKeg"
    [class.redFont]="keg.price < 5"
    [keg]="keg">
    </keg-display>
    <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg">
    </edit-keg>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLow: string = "all";
  public filterDeal: string = "all";
  createKeg(newKegInfo): void {
    console.log(newKegInfo);
    this.kegList.push(
      new Keg(newKegInfo[0], newKegInfo[1], newKegInfo[2], newKegInfo[3], 124)
    );
  }
  kegClicked(clickedKeg: Keg): void {
    console.log(clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  onChange(filterOption) {
    this.filterLow = filterOption;
  }
  onChangePrice(filterPrice) {
    this.filterDeal = filterPrice;
  }
}
