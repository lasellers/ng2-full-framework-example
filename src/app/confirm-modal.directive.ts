import { Directive, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: `[confirm-modal]`
})
export class ConfirmModalDirective {
  @Input() confirmMessage = 'Are you sure you want to do this?';

  @HostListener('click', ['$event'])
  confirmFirst(event: Event) {
    return window.confirm(this.confirmMessage);
  }

}
