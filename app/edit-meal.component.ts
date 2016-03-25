import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'edit-meal',
    inputs: ['meal'],
  template: `
    <div class="container details">
      <h2>{{ meal.detail }}</h2>
      <h3>Calories: {{ meal.calorie }}</h3>
    </div>
    <div class="container meal-form">
      <h3>Edit Meal: </h3>
      <input [(ngModel)]="meal.name" class="col-sm-8 input-md meal-form"/>
      <input [(ngModel)]="meal.detail" class="col-sm-8 input-md meal-form"/>
      <input [(ngModel)]="meal.calorie" class="col-sm-8 input-md meal-form"/>
    </div>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
