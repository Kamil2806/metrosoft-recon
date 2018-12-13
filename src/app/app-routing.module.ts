import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestaurantListComponent} from "./restaurant-list/restaurant-list.component";
import {MealsListComponent} from "./meals-list/meals-list.component";
import {OrdersHistoryComponent} from "./orders-history/orders-history.component";

const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  {path: 'restaurants', component: RestaurantListComponent},
  {path: ':restaurant/mealsList', component: MealsListComponent},
  {path: 'orderHistory', component: OrdersHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
