import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [NewMealComponent, EditMealComponent],
  template: `
  <div *ngFor="#meal of mealList"
  (click)="mealClicked(meal)"
  [class.selected]="meal === selectedMeal">
    <p>Name: {{ meal.name }}</p>
    <p>Details: {{ meal.details }}</p>
    <p>Calories: {{ meal.calories }}</p>
    <hr>
  </div>
  <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  createMeal(newMealInfo): void {
    console.log(newMealInfo);
    this.mealList.push(
      new Meal(newMealInfo[0], newMealInfo[1], newMealInfo[2])
    );
  }
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}
