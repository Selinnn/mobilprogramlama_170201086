import { Pipe, PipeTransform } from '@angular/core';
import { Aciklamalar } from '../models/aciklamalar';

@Pipe({
  name: 'filter' //Pipe name olarak bu kullanılacak.
})
export class FilterPipe implements PipeTransform {transform(aciklamalar: Aciklamalar[], searchText?: string): Aciklamalar[] {
    if (!searchText) {
      return aciklamalar;
    } else {
      return aciklamalar.filter(function (item: any) {
        for (let property in item) {
          if (item[property] === null) {
            continue;
          }
          if (item[property].toString().toLowerCase().includes(searchText)) {
            return true;
          }
        }
        return false;
      });
    }
  }
}