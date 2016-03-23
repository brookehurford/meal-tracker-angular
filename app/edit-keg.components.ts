import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  inputs: ['keg'],
  template:`
  <div class="keg-form">
  <h3>Edit Keg Details:</h3>
  <input [(ngModel)]="keg.name"/>
  <input [(ngModel)]="keg.brand"/>
  <input [(ngModel)]="keg.alcoholContent"/>
  <input [(ngModel)]="keg.price"/>
  </div>
  `
})
export class EditKegComponent {
  public keg: Keg;
}
