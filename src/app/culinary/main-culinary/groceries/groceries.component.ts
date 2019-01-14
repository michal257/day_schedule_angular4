import { Component, OnInit } from '@angular/core';
import { Groceries } from '../../models/groceries';
import { CulinaryService } from '../../culinary.service';

@Component({
  selector: 'groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

  groceries : Groceries[];
  thisView = '';
  addGroceries = 'hide-class'

  constructor(private culinaryService : CulinaryService) { }

  ngOnInit() {
    this.loadGroceries();
  }

  loadGroceries() : void
  {
    this.culinaryService.getAllGroceries().subscribe((groceries) => {
      this.groceries = groceries;
    });
  }

  showAddGroceries(){
    this.thisView = 'hide-class';
    this.addGroceries = '';
  }

  showGroceriesList()
  {
    this.thisView = '';
    this.addGroceries = 'hide-class';
    this.loadGroceries();
  }
}
