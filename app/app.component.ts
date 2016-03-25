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
    <div class="footer">
    <hr>
    Created by Brooke Hurford @ Epicodus | &copy; 2016
    </div>
  </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Tacos", "With cheese and sourcream", 750),
      new Meal("Cauliflower Fried Rice", "Replace rice with shredded cauliflower", 295),
      new Meal("Burger", "No cheese, and water for a drink", 700),
      new Meal("Chicken and Asparagus", "Cooked at home", 290),
      new Meal("Kind Granola Bar", "Sugar, only 5 grams", 80)
    ];
  }
}
