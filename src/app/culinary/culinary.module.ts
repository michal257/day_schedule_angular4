import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCulinaryComponent } from './main-culinary/main-culinary.component';
import { DishesListComponent } from './main-culinary/dishes-list/dishes-list.component';
import { GroceriesComponent } from './main-culinary/groceries/groceries.component';
import { DishDetailsComponent } from './main-culinary/dish-details/dish-details.component';
import { RouterModule } from '@angular/router';
import { AddDishComponent } from './main-culinary/dishes-list/add-dish/add-dish.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from '../shared-module/pipes/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FilterGroceriesPipe } from '../shared-module/pipes/filter-groceries.pipe';
import { AddGroceriesComponent } from './main-culinary/groceries/add-groceries/add-groceries.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],

  entryComponents: [
    DishesListComponent,
    GroceriesComponent
  ],

  exports: [MainCulinaryComponent],
  declarations: [
    MainCulinaryComponent, 
    DishesListComponent, 
    GroceriesComponent, 
    DishDetailsComponent, 
    AddDishComponent, 
    FilterPipe,
    FilterGroceriesPipe,
    AddGroceriesComponent
  ]
})
export class CulinaryModule { }
