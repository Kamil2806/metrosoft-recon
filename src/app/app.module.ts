import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import {
  MatButtonModule, MatDialogModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
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
import { LoginFormComponent } from './login-form/login-form.component';
import {ControlContainer, ReactiveFormsModule} from "@angular/forms";
import {StateMatcherService} from "./state-matcher.service";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    MealsListComponent,
    MenuComponent,
    OrdersHistoryComponent,
    DialogComponent,
    LoginFormComponent
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
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    MealsListService,
    DialogService,
    StateMatcherService,
    ControlContainer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
