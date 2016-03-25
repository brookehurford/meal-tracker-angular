import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealInfoComponent } from './meal-info.component';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [ EditMealComponent, MealInfoComponent],
  template: `
  <div class="mealItem">
    <p (click)="mealInfoClicked(meal)" [class.selectedInfo]="meal === selectedInfo">Name: {{ meal.name }}</p>
    <meal-info *ngIf="selectedMealInfo" [meal]="selectedMealInfo"></meal-info>
    <button (click)="mealClicked(meal)" [class.selected]="meal === selectedMeal">Edit Meal Details</button>
    <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
    <hr>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public onMealInfoSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedMealInfo: Meal;
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal.details);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  mealInfoClicked(clickedMealInfo: Meal): void {
    console.log(clickedMealInfo);
    this.selectedMealInfo = clickedMealInfo;
    this.onMealInfoSelect.emit(clickedMealInfo);
  }
}
