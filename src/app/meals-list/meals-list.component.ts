import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MealsListService} from "./meals-list.service";
import { Location } from '@angular/common';
import {DialogService} from "../dialog/dialog.service";

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss']
})
export class MealsListComponent implements OnInit {

  private mealsList = [];
  displayedColumns: string[] = ['position', 'name', 'price'];
  dataSource = ORDER_ELEMENTS;

  constructor(
    private route: ActivatedRoute,
    private mealsListService: MealsListService,
    private _location: Location,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.getRestaurantMeals();
  }

  private getRestaurantMeals() {
    const restaurant = this.route.snapshot.paramMap.get("restaurant");
    this.mealsList = this.mealsListService.getMeals(restaurant);
  }

  public saveOrder() {
    this._location.back();
  }

  public openDialog() {
    this.dialogService.openDialog();
  }
}

export interface OrderElement {
  position: number;
  name: string;
  price: string;
}

const ORDER_ELEMENTS: OrderElement[] = [
  {position: 1, name: "posilek1", price: "22.30 zł"},
  {position: 2, name: "posilek2", price: "25 zł"},
  {position: 3, name: "posilek3", price: "45 zł"},
  {position: 4, name: "posilek4", price: "67.20 zł"},
  {position: 5, name: "posilek5", price: "20.70 zł"},
];
