import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdAntiBackdoorGuard } from './guards/ad-anti-backdoor.guard';
import { AdbackdoorGuard } from './guards/adbackdoor.guard';
import { CategoryComponent } from './pages/category/category.component';
import { CityComponent } from './pages/city/city.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component : LoginComponent,
        canActivate : [AdAntiBackdoorGuard]
      },
      {
        path : "users",
        component : UsersComponent,
        canActivate : [AdbackdoorGuard] 
      },
      {
        path : "city",
        component : CityComponent,
        canActivate : [AdbackdoorGuard]
      },
      {
        path : "category",
        component : CategoryComponent,
        canActivate : [AdbackdoorGuard]
      },
      {
        path : "productList",
        component : ProductListComponent,
        canActivate : [AdbackdoorGuard]
      },
      {
        path : "productAdd",
        component : ProductAddComponent,
        canActivate : [AdbackdoorGuard]
      },
      {
        path : "product/edit/:id",
        component : ProductAddComponent,
        canActivate : [AdbackdoorGuard]
      },
      {
        path : "dashboard",
        component : DashboardComponent,
        canActivate : [AdbackdoorGuard]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
