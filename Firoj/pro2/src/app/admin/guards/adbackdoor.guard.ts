import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AdminloginService } from '../services/adminlogin.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdbackdoorGuard implements CanActivate {
 constructor(
  private _als : AdminloginService,
  private _router : Router
 ){}
 
  canActivate() {
    if(this._als.isLoggedIn()){
      return true;

    }else{
      this._router.navigate(["/"]);
      return false;
    }
  }
  
}
