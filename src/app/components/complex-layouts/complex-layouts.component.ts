import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-complex-layouts',
  templateUrl: './complex-layouts.component.html',
  styleUrls: ['./complex-layouts.component.css']
})
export class ComplexLayoutsComponent implements OnInit {
  id = null;
  title = null;

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
    this.title = route.snapshot.data['title'];
  }

  ngOnInit() {
  }

}
