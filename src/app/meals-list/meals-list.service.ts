import { Injectable } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MealsListService {

  constructor(private route: ActivatedRoute) { }

  private maleconMeals = [
    'maleconMeals1'
  ];

  private samuiMeals = [
    'samuiMeals1',
    'samuiMeals2'
  ];

  private yanaSushiMeals = [
    'yanaSushMeals1',
    'yanaSushMeals2',
    'yanaSushMeals3'
  ];

  private streetSlowFoodMeals = [
    'streetSlowFoodMeals1',
    'streetSlowFoodMeals2',
    'streetSlowFoodMeals3',
    'streetSlowFoodMeals4'
  ];

  private mrPlantMeals = [
    'maleconMeals1',
    'maleconMeals2',
    'maleconMeals3',
    'maleconMeals4',
    'maleconMeals5'
  ];

  private kardamonMeals = [
    'kardamonMeals1',
    'kardamonMeals2',
    'kardamonMeals3',
    'kardamonMeals4',
    'kardamonMeals5',
    'kardamonMeals6'
  ];

  public getMeals(restaurant: string) {
    if (restaurant == 'malecon') return this.maleconMeals;
    else if (restaurant == 'kardamon') return this.kardamonMeals;
    else if (restaurant == 'samui') return this.samuiMeals;
    else if (restaurant == 'yanaSushi') return this.yanaSushiMeals;
    else if (restaurant == 'streetSlowFood') return this.streetSlowFoodMeals;
    else if (restaurant == 'mrPlant') return this.mrPlantMeals;
  }
}
