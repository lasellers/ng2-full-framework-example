import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-blah',
  templateUrl: './blah.component.html',
  styleUrls: ['./blah.component.css']
})
export class BlahComponent implements OnInit {
  title = 'app-blah Blah Component';

  @Input() name1 = "John";
  @Input() name2 = "Wilbur";

  count: number = 0;

  initialCount: number = 3;

  constructor() { }

  ngOnInit() {
  }

  myBlah() {
    console.log('button clicked');
    location.href = "blahxxx";
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

}
