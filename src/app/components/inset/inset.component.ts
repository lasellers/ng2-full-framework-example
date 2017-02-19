import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-inset',
  templateUrl: './inset.component.html',
  styleUrls: ['./inset.component.css']
})
export class InsetComponent implements OnInit {
  title = 'app-inset Inset Component';

  constructor() { }

  ngOnInit() {
  }

  myInset() {
    console.log('button clicked');
    location.href="insetxxx";
  }

}
