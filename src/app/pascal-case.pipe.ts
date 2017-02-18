import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascalcase'
})
export class PascalCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) { return value; }

    return value.replace(/[^0-9a-zA-Z ]/g, '').replace(/\w\S*/g, function (word, index) {
      console.log(`pascalcase: word=${word} index=${index}`);
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }).replace(/ /g, '');

  }

}
