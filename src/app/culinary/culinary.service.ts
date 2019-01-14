import { Injectable } from '@angular/core';
import { Groceries } from './models/groceries';
import { Observable } from 'rxjs/Observable';
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { Dish } from './models/dish';
import { DishComponent } from './models/dish-component';

@Injectable()
export class CulinaryService {

  private apiUrl = "http://localhost/daysheduleapi/Controllers/"

  private GroceriesController : string = "groceriesController.php";
  private DishesController : string = "dishesController.php";
  private DishComponentController : string = "dishComponentsController.php";
  
  constructor(private http : Http) { }

  getAllGroceries() : Observable<Groceries[]> {
    return this.http.get(this.apiUrl + this.GroceriesController).map((res) => res.json())
  }

  GetAllDishes() : Observable<Dish[]> {
    return this.http.get(this.apiUrl + this.DishesController).map((res) => res.json())
  }

  GetDish(gid : number) : Observable<Dish> {
    return this.http.get(this.apiUrl + this.DishesController + '?dishGID=' + gid).map((res) => res.json())
  }

  GetDishComponent(dishGID : number) :Observable<DishComponent> {
    return this.http.get(this.apiUrl + this.DishComponentController + '?dishGID=' + dishGID).map((res) => res.json())
  }

  AddDish(data) : Observable<Dish> {
    return this.http.post(this.apiUrl + this.DishesController, data)
      .map((res) => res.json())
  }

  AddGroceries(data) : Observable<Groceries> {
    return this.http.post(this.apiUrl + this.GroceriesController, data)
    .map((res) => res.json());
  }
}
