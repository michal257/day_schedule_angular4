import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGroceries'
})
export class FilterGroceriesPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toString().toLowerCase();
      
    return items.filter(function(item) {
      return item.Name.toLowerCase().indexOf(searchText) !== -1;
    });
  }

}
