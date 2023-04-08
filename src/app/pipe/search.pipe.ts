import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../Models/users';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: Users[], searchText: string) {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.first_name.toLocaleLowerCase().includes(searchText);
    });
  }

}
