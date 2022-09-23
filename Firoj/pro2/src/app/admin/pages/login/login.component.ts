import { Component, OnInit } from '@angular/core';
import { AdminloginService } from '../../services/adminlogin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

adminLoginForm : FormGroup 
check = false;
 errMsg : any;
  constructor(
    private _fb : FormBuilder,
    private _router : Router,
    private _als : AdminloginService
  ) { 
    this.adminLoginForm = this._fb.group({
      username : ["", Validators.required],

      password : ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

submit(){
  if(this.adminLoginForm.invalid){
    this.check = true;
    return;

  }else{
    this._als.save(this.adminLoginForm.value).subscribe(result=>{
      if(result.success == false){
        if(result.type == 1){
          this.errMsg = "Username & Password is Incorrect"
        }
        if(result.type == 2){
          this.errMsg = " Password is Incorrect"

        }
          
      }else{
        localStorage.setItem(  "Admintoken" , result.token )
        this._router.navigate(["/admin/dashboard"]);
      }
      
    })
  }
}


}
