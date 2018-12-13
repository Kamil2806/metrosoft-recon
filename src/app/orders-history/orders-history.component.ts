import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss']
})
export class OrdersHistoryComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'orderDate', 'price'];
  dataSource = ORDER_ELEMENTS;

  constructor() { }

  ngOnInit() {
  }

}

export interface OrderElement {
  position: number;
  orderDate: string;
  name: string;
  price: string;
}

const ORDER_ELEMENTS: OrderElement[] = [
  {position: 1, orderDate: "22.10.2018", name: "posilek1", price: "22.30 zł"},
  {position: 2, orderDate: "1.12.2018", name: "posilek2", price: "25 zł"},
  {position: 3, orderDate: "7.3.2018", name: "posilek3", price: "45 zł"},
  {position: 4, orderDate: "24.6.2018", name: "posilek4", price: "67.20 zł"},
  {position: 5, orderDate: "16.8.2018", name: "posilek5", price: "20.70 zł"},
];
