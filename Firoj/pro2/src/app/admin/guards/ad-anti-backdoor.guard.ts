import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AdminloginService } from '../services/adminlogin.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdAntiBackdoorGuard implements CanActivate {
  constructor(
    private _als : AdminloginService,
    private _router : Router
  ){}
  canActivate() {
   if(this._als.isLoggedIn()){
   this._router.navigate(["/admin/dashboard"])
   return false;
  }
  else{
    return true;
  }
}
}
