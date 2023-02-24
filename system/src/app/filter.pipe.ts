import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], searchTerm: string): any[] {
   

    if (!value || !searchTerm) {

      return value;

    }

   

    return value.filter(value =>
      value.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      value.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      value.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
