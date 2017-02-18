import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './member/member.component';
import { MemberTitlePipe } from './member-title.pipe';
import { MemberTitleDirective } from './member-title.directive';
import { MemberPhotoDirective } from './member-photo.directive';
import { ProjectsComponent } from './projects/projects.component';
import { CamelCasePipe } from './camel-case.pipe';
import { PascalCasePipe } from './pascal-case.pipe';
import { StudlyCasePipe } from './studly-case.pipe';
import { SnakeCasePipe } from './snake-case.pipe';
import { KebabCasePipe } from './kebab-case.pipe';
import { ConfirmModalDirective } from './confirm-modal.directive';
import { RepeatNDirective } from './repeat-n.directive';
import { RedlineDirective } from './redline.directive';
import { HighlineDirective } from './highline.directive';
import { ForAnyOrderDirective } from './for-any-order.directive';
import { ErrorHandlingService } from './error-handling.service';

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
    ForAnyOrderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ErrorHandlingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
