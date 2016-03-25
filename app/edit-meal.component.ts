import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'edit-meal',
    inputs: ['meal'],
  template: `
    <div class="container details">
      <h1 class="selectedMeal">Selected Meal</h1>
      <h2>{{ meal.food }} - "{{ meal.detail }}"</h2>
      <h3>Calories: {{ meal.calorie }}</h3>
    </div>
    <div class="container meal-form">
      <h3>Edit Meal: </h3>
      <input [(ngModel)]="meal.food" class="col-sm-2 input-md"/>
      <input [(ngModel)]="meal.detail" class="col-sm-2 input-md" />
      <input [(ngModel)]="meal.calorie" class="col-sm-2 input-md"/>
    </div>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
