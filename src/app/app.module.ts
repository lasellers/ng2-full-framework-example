import { NgModule, Component } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { environment } from '../environments/environment';
import { environment } from '../environments/environment';
import { APP_BASE_HREF } from '@angular/common';

import { MemberTitleDirective } from './directives/member-title.directive';
import { MemberPhotoDirective } from './directives/member-photo.directive';
import { ConfirmModalDirective } from './directives/confirm-modal.directive';
import { RepeatNDirective } from './directives/repeat-n.directive';
import { RedlineDirective } from './directives/redline.directive';
import { HighlineDirective } from './directives/highline.directive';
import { ForAnyOrderDirective } from './directives/for-any-order.directive';

import { MemberTitlePipe } from './pipes/member-title.pipe';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { PascalCasePipe } from './pipes/pascal-case.pipe';
import { StudlyCasePipe } from './pipes/studly-case.pipe';
import { SnakeCasePipe } from './pipes/snake-case.pipe';
import { KebabCasePipe } from './pipes/kebab-case.pipe';

import { ReadOnlyDataService } from './services/read-only-data.service';
import { ErrorHandlingService } from './services/error-handling.service';

import { RouterModule, Routes  } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MembersComponent } from './components/members/members.component';
import { MemberComponent } from './components/member/member.component';
import { InsetComponent } from './components/inset/inset.component';
import { BlahComponent } from './components/blah/blah.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ComplexLayoutsComponent } from './components/complex-layouts/complex-layouts.component';

import { AppRoutingModule } from './app.routing.module';

//import { MaterialModule } from '@angular/material';
//import 'hammerjs';

/*
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'member/:id', component: MemberComponent },
  { path: 'members', component: MembersComponent },
  { path: 'inset', component: InsetComponent },
  { path: 'blah', component: BlahComponent },
  {
    path: 'complex-layouts',
    component: ComplexLayoutsComponent,
    data: { title: 'Complex Layouts' }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
*/
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    // MaterialModule
    // RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    MembersComponent,
    MemberComponent,
    MemberTitlePipe,
    MemberTitleDirective,
    MemberPhotoDirective,
    CamelCasePipe,
    PascalCasePipe,
    StudlyCasePipe,
    SnakeCasePipe,
    KebabCasePipe,
    ConfirmModalDirective,
    RepeatNDirective,
    RedlineDirective,
    HighlineDirective,
    ForAnyOrderDirective,
    InsetComponent,
    BlahComponent,
    PageNotFoundComponent,
    ComplexLayoutsComponent
  ],
  providers: [ToasterService, ErrorHandlingService, ReadOnlyDataService,
    {
      provide: APP_BASE_HREF,
      useValue: environment.baseUrl
    }
  ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
