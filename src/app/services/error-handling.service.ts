import { Injectable } from '@angular/core';
import { ToasterModule, ToasterService } from 'angular2-toaster';

@Injectable()
export class ErrorHandlingService {

  constructor(public toasterService: ToasterService) {

  }


  handleError(error: any): void {
    // debugger;
    const text: string = error.statusText || 'Internet Error';
    console.error(`Error: (${error.status}) ${text}`);
    const message: string = `Error: (${error.status}) ${text}`;
    this.toasterService.pop('error', `Error: ${error.status}`, text);
  }

  handleErrorYoutube(error: any): void {

    const yterror = JSON.parse(error._body).error;
    console.error(yterror);

    // debugger;
    const text: string = yterror.message || 'Youtube Error';
    console.error(`Error: (${yterror.code}) ${text}`);
    const message: string = `Youtube Error: (${yterror.code}) ${text}`;
    this.toasterService.pop('error', `Youtube Error: ${yterror.code}`, text);
  }

}
