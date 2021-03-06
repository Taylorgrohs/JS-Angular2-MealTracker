import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <div class="jumbotron">
        <div class="container">
          <h1>Meal Tracker</h1>
        </div>
      </div>
      <h2 class="layout">Today you have had:</h2>
      <meal-list
      [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Muffin", "Quick breakfast", 300),
      new Meal("Chicken Tacos", "Food cart lunch", 500),
      new Meal("CheeseBurger", "Dinner", 1000)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {

  }
}
