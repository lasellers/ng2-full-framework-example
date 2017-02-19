import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }