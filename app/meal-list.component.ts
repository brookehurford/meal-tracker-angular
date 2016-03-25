import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { MealInfoComponent } from './meal-info.component';
import { MealComponent } from './meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [NewMealComponent, MealComponent],
  template: `
  <meal-display *ngFor="#meal of mealList"
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
  createMeal(newMealInfo): void {
    this.mealList.push(
      new Meal(newMealInfo[0], newMealInfo[1], newMealInfo[2])
    );
  }
}

// <p (click)="mealInfoClicked(meal)" [class.selectedInfo]="meal === selectedInfo">Name: {{ meal.name }}</p>
// <meal-info *ngIf="selectedInfo" [meal]="selectedInfo"></meal-info>
// <button (click)="mealClicked(meal)" [class.selected]="meal === selectedMeal">Edit Meal Details</button>
// <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
// <hr>
