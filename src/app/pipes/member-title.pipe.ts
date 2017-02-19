import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberTitle'
})
export class MemberTitlePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
