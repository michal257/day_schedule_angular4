import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CulinaryService } from '../../culinary.service';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../../models/dish';
import { DishComponent } from '../../models/dish-component';
import { Groceries } from '../../models/groceries';

@Component({
  selector: 'dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

  @Input() dish : Dish;
  @Output() viewDishDetails : EventEmitter<boolean> = new EventEmitter<boolean>();
  dishComponents : DishComponent;
  groceries : Groceries[];

  constructor(private culinaryService : CulinaryService) { }

  ngOnInit() {
    this.LoadRecipe();
    this.getGroceries();
  }

  LoadRecipe() : void
  {
    this.culinaryService.GetDishComponent(this.dish.GID).subscribe((dishComponents) => {
      this.dishComponents = dishComponents;
    })
  }

  closeThis(){
    this.viewDishDetails.emit(false);
  }

  getGroceries(){
    this.culinaryService.getAllGroceries().subscribe((groceries) => {
      this.groceries = groceries;
    });
  }


}
