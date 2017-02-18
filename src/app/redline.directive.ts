import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[redline]'
})
export class RedlineDirective {

  constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'red';
    }

}
