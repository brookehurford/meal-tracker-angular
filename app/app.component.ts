import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <hr>
    <meal-list [mealList]="meals"></meal-list>
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
