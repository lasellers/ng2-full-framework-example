import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
//import { } from './data.json';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Subscription } from 'rxjs/Subscription';

console.clear();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NG2 Router and Structural Example.';

  users: Array<Object> = [];

  constructor(
    private http: Http
    //, public toasterService: ToasterService
  ) { }

  ngOnInit() {
    console.log('app.component OnInit');
    const obj = this.http.get('./data.json')
      .map((res: Response) => res.json())
      .subscribe(
      users => {
        this.users = Array.from(users);
        console.log(this.users);
      },
      error => {
        this.emitErrorMessage(error);
      },
      () => console.log('data.json finished')
      );
  }

  ngOnChanges() {
    console.log('app.component ngOnChanges');
  }

  ngOnDestroy() {
    console.log('app.component ngOnDestroy');
  }

  visitAngularIo() {
    location.href = 'https://angular.io';
  }

  emitErrorMessage(error): void {
    // debugger;
    const text: string = error.statusText || 'Internet Error';
    console.error(`Error: (${error.status}) ${text}`);
    const message: string = `Error: (${error.status}) ${text}`;
    //  this.toasterService.pop('error', `Error: ${error.status}`, text);
  }

}
