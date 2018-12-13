import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import {
  MatButtonModule, MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTableModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MealsListComponent } from './meals-list/meals-list.component';
import { MenuComponent } from './menu/menu.component';
import {MealsListService} from "./meals-list/meals-list.service";
import { OrdersHistoryComponent } from './orders-history/orders-history.component';
import {DialogService} from "./dialog/dialog.service";
import {DialogComponent} from "./dialog/dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    MealsListComponent,
    MenuComponent,
    OrdersHistoryComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [
    MealsListService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
