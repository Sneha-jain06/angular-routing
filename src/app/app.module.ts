import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AboutComponent,
    SignupComponent,
    HomeComponent,
    ContactComponent,
    ErrorPageComponent,
    AboutmeComponent,
    AboutcompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
