import { Component, Input } from '@angular/core';
import { OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Subscription } from 'rxjs/Subscription';

import { ReadOnlyDataService } from '../../services/read-only-data.service';
import { ErrorHandlingService } from '../../services/error-handling.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  title = 'Members';

  users: Array<Object> = [];

  constructor(
    private http: Http,
    private errorhandling: ErrorHandlingService,
    private ro: ReadOnlyDataService
  ) { }

  ngOnInit() {
    console.log('members.component OnInit');

    //
    /*let self = this;
    this.ro.getUsers(function (users) {
      self.users = users;

      console.log("2 Members: self.users=");
      console.log(self.users);
    });
    */

    /*
        this.ro.getUsers(users => {
          this.users = users;
          console.log('Members: this.users=');
          console.log(this.users);
        });
    */

    this.ro.getUsers((function (users) {
      this.users = users;
      console.log('Members: this.users=');
      console.log(this.users);
    }).bind(this));

  }

}
