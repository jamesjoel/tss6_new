import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { SharedComponent } from './shared/shared.component';
import { PagesComponent } from './pages/pages.component';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MyPagesComponent } from './pages/my-pages/my-pages.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ProductBoxComponent } from './shared/product-box/product-box.component';
import { NamePipe } from './pipes/name.pipe';


@NgModule({
  declarations: [
    SharedComponent,
    PagesComponent,
    UserComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    MyPagesComponent,
    MyProfileComponent,
    ProductBoxComponent,
    NamePipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
