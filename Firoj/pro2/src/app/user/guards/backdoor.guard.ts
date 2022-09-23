import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {
 constructor(
  private _ls : LoginService,
  private _router : Router
 ){

 }
 
  canActivate(
   ){
    if(this._ls.isLoggedIn()){
      return true;
    }else{
      this._router.navigate(["/login"]);
      return false;
    }
    
  }
  
}
