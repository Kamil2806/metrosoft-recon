import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  public restaurants = [
    'kardamon',
    'malecon',
    'mrPlant',
    'samui',
    'streetSlowFood',
    'yanaSushi'
  ];

  constructor() { }

  ngOnInit() {
  }

}
