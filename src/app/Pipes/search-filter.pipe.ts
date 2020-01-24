 import { Pipe, PipeTransform, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  constructor(){}
       transform(items: any, term: string, count , excludes: any = []): any {
      if (!term || !items) return items;
      return SearchFilterPipe.filter(items, term , count, excludes);
    }
    static filter(items: Array<{ [key: string]: any }>, term: string, count, excludes: any): Array<{ [key: string]: any }> {

      console.log(term);
      const toCompare = term.toLowerCase();

      function checkInside(item: any, term: string) {
        for (let property in item) {
          if (item[property] === null || item[property] == undefined || excludes.includes(property)) {
            continue;
          }
          if (typeof item[property] === 'object') {
            if (checkInside(item[property], term)) {
              return true;
            }
          }
          else if (item[property].toString().toLowerCase().includes(toCompare)) {
            return true;
          }
        }
        return false;
      }
      const newArr = items.filter(function (item) {
        return checkInside(item, term);
      });

      count.next(newArr.length);
      return newArr;
    }

}