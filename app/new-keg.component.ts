import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="kegForm">
  <h3>Tap Keg:</h3>
  <input placeholder="Name" #newName>
  <input placeholder="Brand" #newBrand>
  <input placeholder="Alcohol Content" #newAC>
  <input placeholder="Price per Pint" #newPrice>
  <button (click)="addKeg(newName, newBrand, newAC, newPrice)" class="btn">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newBrand: HTMLInputElement, newAC: HTMLInputElement, newPrice: HTMLInputElement) {
    var values = [newName.value, newBrand.value, newAC.value, newPrice.value];
    this.onSubmitNewKeg.emit(values);
    console.log(values);
    newName.value = "";
    newBrand.value = "";
    newAC.value = "";
    newPrice.value = "";
  }
}
