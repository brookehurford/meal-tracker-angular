import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { MealInfoComponent } from './meal-info.component';
import { MealComponent } from './meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [CaloriesPipe],
  directives: [NewMealComponent, MealComponent],
  template: `
  <div class="dropdowns">
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all"  selected="selected">Show All</option>
    <option value="healthy">Healthy Meals</option>
    <option value="unhealthy">Unhealthy Meals</option>
  </select>
  </div>
  <meal-display *ngFor="#meal of mealList | calories:filterCalories"
  [meal]="meal">
  </meal-display>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public onMealInfoSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedMealInfo: Meal;
  public filterCalories: string = "all";
  createMeal(newMealInfo): void {
    this.mealList.push(
      new Meal(newMealInfo[0], newMealInfo[1], newMealInfo[2])
    );
  }
  onChange(filterOption) {
  this.filterCalories = filterOption;
}
}

// <p (click)="mealInfoClicked(meal)" [class.selectedInfo]="meal === selectedInfo">Name: {{ meal.name }}</p>
// <meal-info *ngIf="selectedInfo" [meal]="selectedInfo"></meal-info>
// <button (click)="mealClicked(meal)" [class.selected]="meal === selectedMeal">Edit Meal Details</button>
// <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
// <hr>
