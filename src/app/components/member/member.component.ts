import { Component, Input } from '@angular/core';
import { OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Subscription } from 'rxjs/Subscription';

import { ReadOnlyDataService } from '../../services/read-only-data.service';
import { ErrorHandlingService } from '../../services/error-handling.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  id = 1;
  title = 'Member';

  user: Object = {};

  constructor(
    route: ActivatedRoute,
    private http: Http,
    private errorhandling: ErrorHandlingService,
    private ro: ReadOnlyDataService
  ) {
    this.id = route.snapshot.params['id'];
  }


  ngOnInit() {
    console.log('member.component OnInit');

    this.ro.getUsers((function (users) {

      const user = users.find(
        (function (obj) {
          return (obj.id.toString() === this.id);
        }).bind(this)
      );

      this.user = user;
      this.title = user.name;

      console.log('Member: user=');
      console.log(this.user);
    }).bind(this));

  }

}
