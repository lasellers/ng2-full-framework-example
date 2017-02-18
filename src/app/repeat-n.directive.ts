// structural directive
import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[repeatN]'
})
export class RepeatNDirective {

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) { }

  @Input() set repeatN(count: number) {

    console.log(this._templateRef);
    if (Number.isInteger(count)) {
      for (let i = 0; i < count; i++) {
        this._viewContainer.createEmbeddedView(this._templateRef);
      }
    } else {
      this._viewContainer.clear();
    }

  }

}
