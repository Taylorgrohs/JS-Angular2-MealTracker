import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'new-meal',
    outputs: ['onSubmitNewMeal'],
  template: `
    <div class="container add-meal-form">
      <h2>Add a meal</h2>
      <input placeholder="Name" class="col-sm-2 input-md" #newName>
      <input placeholder="Details" class="col-sm-2 input-md" #newDetail>
      <input placeholder="Calories" class="col-sm-2 input-md" #newCalorie>
    </div>
    <button (click)="addMeal(newName, newDetail, newCalorie)" class="btn-default btn-lg add-button">Add Meal</button>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<any>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetail: HTMLInputElement, userCalorie: HTMLInputElement) {
    var holder = [userName.value, userDetail.value, userCalorie.value];
    this.onSubmitNewMeal.emit(holder);
    userName.value = "";
    userDetail.value = "";
    userCalorie.value = "";
  }
}
