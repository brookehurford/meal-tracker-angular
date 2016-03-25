import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <div class="editMeal">
  <h3>Edit Meal Details:</h3>
  <input [(ngModel)]="meal.name"/>
  <input [(ngModel)]="meal.details"/>
  <input [(ngModel)]="meal.calories"/>
  </div>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
