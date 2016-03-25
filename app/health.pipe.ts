import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "health",
  pure:false
})
export class HealthPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredHealthState = args[0];
    if(desiredHealthState === "low") {
      return input.filter((meal) => {
        if(meal.calorie < 300){
        return !meal.health;
      }
    });
  } else if (desiredHealthState === "high") {
    return input.filter((meal) => {
      if(meal.calorie >300){
        return !meal.health;
        }
      });
    } else {
    return input;
    }
  }
}
