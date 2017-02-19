/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlahComponent } from './blah.component';

describe('BlahComponent', () => {
  let component: BlahComponent;
  let fixture: ComponentFixture<BlahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
