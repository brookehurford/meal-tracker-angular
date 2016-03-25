import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-info',
  inputs: ['meal'],
  template:`
  <div class="mealInfo">
    <p>Details: {{ meal.details }}</p>
    <p>Calories: {{ meal.calories }}</p>
  </div>
  `
})
export class MealInfoComponent {
  public meal: Meal;
}
