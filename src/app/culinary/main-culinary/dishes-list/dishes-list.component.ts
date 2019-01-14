import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CulinaryService } from '../../culinary.service';
import { Dish } from '../../models/dish';

@Component({
  selector: 'dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {

  @Output() shownDishDetails : EventEmitter<Dish> = new EventEmitter<Dish>();

  dishes : Dish[];
  mainView = '';
  addDish = 'hide-class'

  constructor(private culinaryService : CulinaryService) { }

  ngOnInit() {
    this.LoadAllDishes();
  }

  LoadAllDishes() : void
  {
    this.culinaryService.GetAllDishes().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }

  GoToDishDetails(dish : Dish)
  {
    this.shownDishDetails.emit(dish);
  }

  showAddDish(){
    this.mainView = 'hide-class';
    this.addDish = '';
  }

  showDishesList()
  {
    this.mainView = '';
    this.addDish = 'hide-class';
    this.LoadAllDishes();
  }
}
