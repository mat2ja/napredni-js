import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(arr: any[], field: string, query: string): any[] {
    if (!(arr && field && query)) {
      return arr;
    }
    return arr.filter((item) => {
      const itemField = item[field];
      return itemField.toString().toLowerCase().includes(query.toLowerCase());
    });
  }
}
