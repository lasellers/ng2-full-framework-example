import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highline]'
})
export class HighlineDirective {

  constructor(private el: ElementRef) {
      // el.nativeElement.style.backgroundColor = 'blue';
    }

@HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
