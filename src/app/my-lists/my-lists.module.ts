import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainListComponent } from './main-list/main-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MainListComponent],
  declarations: [MainListComponent]
})
export class MyListsModule { }
