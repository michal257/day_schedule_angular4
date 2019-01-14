import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CulinaryService } from '../../../culinary.service';

@Component({
  selector: 'add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  @Output() viewAddDish : EventEmitter<boolean> = new EventEmitter<boolean>();

  dishForm : FormGroup;
  
  constructor(private formBuilder : FormBuilder,
              private culinaryService : CulinaryService) { }

  ngOnInit() {
    this.dishForm = this.buildDishForm();
  }

  closeThis(){
    this.viewAddDish.emit(false);
    this.dishForm.reset();
  }

  buildDishForm(){
    return this.formBuilder.group({
      Name: ['', [Validators.required, Validators.maxLength(10)]],
      Description: ['', Validators.maxLength(10)]
    });
  }

  addDish(){
    this.culinaryService.AddDish(this.dishForm.value).subscribe(() => {
      this.closeThis();
    });
  }

}
