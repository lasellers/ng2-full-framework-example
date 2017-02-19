import { ToasterService } from 'angular2-toaster';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MemberTitleDirective } from './member-title.directive';
import { MemberPhotoDirective } from './member-photo.directive';
import { ConfirmModalDirective } from './confirm-modal.directive';
import { RepeatNDirective } from './repeat-n.directive';
import { RedlineDirective } from './redline.directive';
import { HighlineDirective } from './highline.directive';
import { ForAnyOrderDirective } from './for-any-order.directive';

import { MemberTitlePipe } from './member-title.pipe';
import { CamelCasePipe } from './camel-case.pipe';
import { PascalCasePipe } from './pascal-case.pipe';
import { StudlyCasePipe } from './studly-case.pipe';
import { SnakeCasePipe } from './snake-case.pipe';
import { KebabCasePipe } from './kebab-case.pipe';

import { ReadOnlyDataService } from './read-only-data.service';
import { ErrorHandlingService } from './error-handling.service';

import { RouterModule, Routes } from '@angular/router';
//import { AppRoutingModule} from './app.routing-module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './member/member.component';
import { ProjectsComponent } from './projects/projects.component';
import { InsetComponent } from './inset/inset.component';
import { BlahComponent } from './blah/blah.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComplexLayoutsComponent } from './complex-layouts/complex-layouts.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'members', component: MembersComponent },
  { path: 'member', component: MemberComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'inset', component: InsetComponent },
  { path: 'blah', component: BlahComponent },
  { path: 'complex-layouts', component: ComplexLayoutsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
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
    ProjectsComponent,
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
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ToasterService, ErrorHandlingService, ReadOnlyDataService, InsetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
