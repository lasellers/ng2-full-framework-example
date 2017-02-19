import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Subscription } from 'rxjs/Subscription';

import { ErrorHandlingService } from './error-handling.service';

@Injectable()
export class ReadOnlyDataService {

  users: Array<Object> = [];

  constructor(
    private http: Http,
    private errorhandling: ErrorHandlingService
  ) { }

  getUsers(callback) {
    console.log('ro getUsers');
    const obj = this.http.get('./users.json')
      .map((res: Response) => res.json())
      .subscribe(
      users => {
        this.users = Array.from(users);

        console.log("getUsers this.user sets=");
        console.log(this.users);
        if (typeof callback === "function") { callback(this.users); }
      },
      error => {
        this.errorhandling.handleError(error);
      },
      () => console.log('users.json finished')
      );

    console.log("getUsers this.users return=");
    console.log(this.users);

    return this.users;

    // return obj;
  }

}


