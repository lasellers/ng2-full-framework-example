import { Component, Input } from '@angular/core';
import { OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

//import { Http, Response } from '@angular/http';
//import 'rxjs/add/operator/map';
// import { Subscription } from 'rxjs/Subscription';

//import { ReadOnlyDataService } from './services/read-only-data.service';

//import { InsetComponent } from './components/inset/inset.component';
//import { AppRoutingModule} from './app.routing-module';

import { environment } from '../environments/environment';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Subscription } from 'rxjs/Subscription';

import { ReadOnlyDataService } from './services/read-only-data.service';
import { ErrorHandlingService } from './services/error-handling.service';

console.clear();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NG2 Full Framework Example.';
  environment = environment;

  users: Array<Object> = [];

  constructor(
    private errorhandling: ErrorHandlingService,
    private http: Http,
    private ro: ReadOnlyDataService
  ) { }

  ngOnInit() {
    console.log('app.component OnInit');

    this.ro.getUsers((function (users) {
      this.users = users;
      console.log('Members: this.users=');
      console.log(this.users);
    }).bind(this));

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
