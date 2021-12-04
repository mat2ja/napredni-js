import { SortField } from './students/students.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting',
  pure: false,
})
export class SortingPipe implements PipeTransform {
  transform(arr: any[], sortField: SortField): any[] {
    const { field, asc } = sortField;
    if (!field) return arr;

    arr.sort((a, b) => {
      let sortRes =
        typeof a[field] === 'number'
          ? a[field] - b[field]
          : a[field].localeCompare(b[field]);

      return asc ? sortRes : -sortRes;
    });
    return arr;
  }
}
