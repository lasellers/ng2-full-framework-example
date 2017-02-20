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
    console.log('ReadOnlyDataService:getUsers');

    if (this.users.length !== 0) {
      if (typeof callback === 'function') { callback(this.users); }
    } else {
      const obs = this.http.get('./assets/users.json')
        .map((res: Response) => res.json())
        .subscribe(
        users => {
          this.users = Array.from(users);

          console.log('ReadOnlyDataService:getUsers users=');
          console.log(this.users);
          if (typeof callback === 'function') { callback(this.users); }
        },
        error => {
          this.errorhandling.handleError(error);
        },
        () => console.log('ReadOnlyDataService: users.json loaded')
        );
    }
  }

}


