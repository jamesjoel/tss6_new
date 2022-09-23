import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { PagesComponent } from './pages/pages.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { CityComponent } from './pages/city/city.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { DeleteComponent } from './shared/delete/delete.component';

import { ProDiscountPipe } from './pipes/pro-discount.pipe';



@NgModule({
  declarations: [
    PagesComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    CityComponent,
    LoginComponent,
    CategoryComponent,
    ProductListComponent,
    ProductAddComponent,
    DeleteComponent,
    ProDiscountPipe,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
