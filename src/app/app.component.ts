import { Component, Input } from '@angular/core';
import { OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

//import { Http, Response } from '@angular/http';
//import 'rxjs/add/operator/map';
// import { Subscription } from 'rxjs/Subscription';

//import { ReadOnlyDataService } from './services/read-only-data.service';

//import { InsetComponent } from './components/inset/inset.component';
//import { AppRoutingModule} from './app.routing-module';
import { ErrorHandlingService } from './services/error-handling.service';

import { environment } from '../environments/environment';

console.clear();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NG2 Full Framework Example.';
  environment = environment;

  //users: Array<Object> = [];

  //initialCount: number = 2;

  constructor(
   // private http: Http,
    private errorhandling: ErrorHandlingService,
    //private ro: ReadOnlyDataService,
  //  private inset: InsetComponent
  ) { }

  ngOnInit() {
    console.log('app.component OnInit');
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
