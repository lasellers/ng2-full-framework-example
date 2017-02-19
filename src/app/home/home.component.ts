import { Component, Input } from '@angular/core';
import { OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Subscription } from 'rxjs/Subscription';

import { ReadOnlyDataService } from '../read-only-data.service';

import { InsetComponent } from '../inset/inset.component';
//import { AppRoutingModule} from './app.routing-module';
import { ErrorHandlingService } from '../error-handling.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'NG2 Router and Structural Example - Home.';

  users: Array<Object> = [];

 initialCount: number = 2;

  constructor(
    private http: Http,
    private errorhandling: ErrorHandlingService,
    private ro: ReadOnlyDataService,
    private inset: InsetComponent
  ) { }

  ngOnInit() {
        console.log('app.component OnInit');

    // this.users =
    let that = this;
    this.ro.getUsers(function (users) {
      console.log("users=");
      console.log(users);

      console.log("that.users=");
      console.log(that.users);

      that.users = users;

    });
    console.log("this.users=");
    console.log(this.users);
  }


  ngOnChanges() {
    console.log('app.component ngOnChanges');
  }

  ngOnDestroy() {
    console.log('app.component ngOnDestroy');
  }

  ngAfterContentInit() {
    console.log('app.component AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('app.component AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('app.component AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('app.component AfterViewChecked');
  }


  visitAngularIo() {
    location.href = 'https://angular.io';
  }

}
