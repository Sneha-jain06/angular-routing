import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path : ''
  },
  {
   component : SigninComponent,
   path : 'signin'
  },
  {
    component : SignupComponent,
    path : 'signup'
   },
  {
  component: AboutComponent,
  path : 'about' ,
  children: [
    {
    path:  'aboutme',
    component:  AboutmeComponent
    },
    {
    path:  'aboutcompany',
    component:  AboutcompanyComponent    }
    ]
  },

  {
    component: ContactComponent,
    path :'contact'
  },
  {
    component : ErrorPageComponent,
    path : '**'
   },
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
