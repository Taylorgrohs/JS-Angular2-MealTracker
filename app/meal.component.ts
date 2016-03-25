import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
    <ul><li><h3>{{ meal.food }}</h3></li></ul>
  `
})
export class MealComponent {
  public meal: Meal;
  
}
