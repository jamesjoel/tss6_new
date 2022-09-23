import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CateService {
    apiUrl = "http://localhost:3000/api/category"
  constructor(
    private _http : HttpClient,
    private _router : Router
  ) { }
save(obj : any){
  return this._http.post<any>(this.apiUrl, obj);
}

getAll(){
  return this._http.get<any>(this.apiUrl);
}


getOne(id : any){
  return this._http.get<any>(this.apiUrl+"/"+id);
}


updateOne(id : any, obj : any){
  return this._http.put<any>(this.apiUrl+"/"+id, obj);
}

delete(id : any){
  return this._http.delete<any>(this.apiUrl+"/"+id);
}


}
