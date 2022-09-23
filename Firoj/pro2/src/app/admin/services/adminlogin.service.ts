import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(
    private _http : HttpClient,
    private _router : Router
  ) {  }

save(obj : any){
  return this._http.post<any>("http://localhost:3000/api/admin/login", obj);
}

adminData(){
  return this._http.get<any>("http://localhost:3000/api/admin/login");
  
}

isLoggedIn(){
  if(localStorage.getItem("Admintoken")){
    return true;
  }else{
    return false;
  }
}

loggedOut(){
  localStorage.removeItem("Admintoken")
 this._router.navigate(["/admin"]);
}

}


