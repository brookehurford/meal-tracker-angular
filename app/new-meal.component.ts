import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template:`
  <div class="newMeal">
    <h3>Add a meal:</h3>
    <input placeholder="Name" #newName>
    <input placeholder="Details" #newDetails>
    <input placeholder="Calories" #newCalories>
    <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-new-meal">Add</button>
  <div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement) {
    var values = [newName.value, newDetails.value, newCalories.value];
    this.onSubmitNewMeal.emit(values);
    console.log(values);
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
