import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <hr>
      <div *ngFor="#meal of meals">
      <p>Name: {{ meal.name }}</p>
      <p>Details: {{ meal.details }}</p>
      <p>Calories: {{ meal.calories }}</p>
      <hr>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Tacos", "Fish tacos, with no cheese", 450),
      new Meal("Chicken and Asparagus", "Cooked at home", 600),
      new Meal("Kind Granola Bar", "Sugar, only 5 grams", 100)
    ];
  }
}
