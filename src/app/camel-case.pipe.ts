import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) { return value; }

    return value.replace(/[^0-9a-zA-Z ]/g, '').replace(/\w\S*/g, function (word, index) {
      console.log(`camelcase: word=${word} index=${index}`);
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      }
    }).replace(/ /g, '');

  }

}
