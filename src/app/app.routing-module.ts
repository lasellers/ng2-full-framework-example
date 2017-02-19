import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './member/member.component';
import { ProjectsComponent } from './projects/projects.component';
import { InsetComponent } from './inset/inset.component';
import { BlahComponent } from './blah/blah.component';
import { ComplexLayoutsComponent } from './complex-layouts/complex-layouts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }