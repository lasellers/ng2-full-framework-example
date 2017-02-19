/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InsetComponent } from './inset.component';

describe('InsetComponent', () => {
  let component: InsetComponent;
  let fixture: ComponentFixture<InsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
