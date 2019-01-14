import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CulinaryService } from '../../../culinary.service';

@Component({
  selector: 'add-groceries',
  templateUrl: './add-groceries.component.html',
  styleUrls: ['./add-groceries.component.css']
})
export class AddGroceriesComponent implements OnInit {

  @Output() viewAddGroceries : EventEmitter<boolean> = new EventEmitter<boolean>();
  
  groceriesForm : FormGroup;
  
  constructor(private formBuilder : FormBuilder,
              private culinaryService : CulinaryService) { }

  ngOnInit() {
    this.groceriesForm = this.buildGroceriesForm();
  }

  closeThis(){
    this.viewAddGroceries.emit(false);
    this.groceriesForm.reset();
  }

  buildGroceriesForm()
  {
    return this.formBuilder.group({
      Name: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }

  addGroceries()
  {
    this.culinaryService.AddGroceries(this.groceriesForm.value).subscribe(() => {
      this.closeThis();
    });
  }

}
