import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterGroceriesPipe } from './pipes/filter-groceries.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FilterPipe],
  declarations: [FilterPipe, FilterGroceriesPipe]
})
export class SharedModuleModule { }
