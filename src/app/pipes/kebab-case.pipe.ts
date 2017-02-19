import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabcase'
})
export class KebabCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) { return value; }

    return value.replace(/[^0-9a-zA-Z ]/g, '').replace(/\w\S*/g, function (word, index) {
      // console.log(`camelcase: word=${word} index=${index}`);
      return word.toLowerCase();
    }).replace(/ /g, '-');

  }

}
