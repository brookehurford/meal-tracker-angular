import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [NewMealComponent],
  template: `
  <div *ngFor="#meal of mealList">
    <p>Name: {{ meal.name }}</p>
    <p>Details: {{ meal.details }}</p>
    <p>Calories: {{ meal.calories }}</p>
    <hr>
  </div>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  createMeal(newMealInfo): void {
    console.log(newMealInfo);
    this.mealList.push(
      new Meal(newMealInfo[0], newMealInfo[1], newMealInfo[2])
    );
  }
}
