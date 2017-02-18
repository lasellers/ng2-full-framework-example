import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studlycase'
})
export class StudlyCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) { return value; }

    //
    if (typeof args === 'string') {
      if (args.localeCompare('random') === 0) {
        return value.replace(/[^0-9a-zA-Z ]/g, '').split('').map(function (char, index) {
          console.log(`studlycase random: char=${char} index=${index}`);
          if (Math.random() > 0.5) {
            return char.toLowerCase();
          } else {
            return char.toUpperCase();
          }
        }).join('').replace(/ /g, '');
      }
    }

    //
    return value.replace(/[^0-9a-zA-Z ]/g, '').split('').map(function (char, index) {
      console.log(`studlycase: char=${char} index=${index}`);
      if (index % 2 === 1) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    }).join('').replace(/ /g, '');

  }
}
