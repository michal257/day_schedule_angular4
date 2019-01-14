import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-main-culinary',
  templateUrl: './main-culinary.component.html',
  styleUrls: ['./main-culinary.component.css']
})
export class MainCulinaryComponent implements OnInit {

  mainView : boolean;
  selectDish : Dish;
  dishesList : boolean = false;
  groceriesList : boolean = false;

  constructor() { }

  ngOnInit() {
    this.mainView = true;
  }

  openDishesList()
  {
    this.mainView = false;
    this.dishesList = true;
    this.groceriesList= false;
    this.selectDish = null;
  }

  openGroceries()
  {
    this.mainView = false;
    this.dishesList = false;
    this.groceriesList= true;
    this.selectDish = null;
  }

  openDishDetails(dish : Dish)
  {
    this.selectDish = dish;
    this.dishesList = false;
    this.groceriesList= false;
  }

  clearMainCulinaryContent()
  {
    this.mainView = true;
    this.selectDish = null;
    this.dishesList = false;
    this.groceriesList= false;
  }
}
