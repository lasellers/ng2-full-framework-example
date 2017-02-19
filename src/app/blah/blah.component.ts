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

  constructor() { }

  ngOnInit() {
  }

  myBlah() {
    console.log('button clicked');
    location.href = "blahxxx";

  }

}
