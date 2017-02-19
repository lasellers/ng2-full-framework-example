import { Component, Input } from '@angular/core';
import { OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

//import { AppRoutingModule} from './app.routing-module';
import { ErrorHandlingService } from '../../services/error-handling.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'NG2 Router and Structural Example Home Component.';

  constructor(
    private errorhandling: ErrorHandlingService
  ) { }

  ngOnInit() {
    console.log('app.component OnInit');
  }

  visitAngularIo() {
    location.href = 'https://angular.io';
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

}
