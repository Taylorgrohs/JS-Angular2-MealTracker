import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'new-meal',
    outputs: ['onSubmitNewMeal'],
  template: `
    <div class="container meal-form">
      <input placeholder="Name" class="col-sm-8 input-md" #newName>
      <input placeholder="Details" class="col-sm-8 input-md" #newDetail>
      <input placeholder="Calories" class="col-sm-8 input-md" #newCalorie>
      <button (click)="addMeal(newName, newDetail, newCalorie)" class="btn-success btn-lg add-button">Add Meal</button>
    </div>
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
