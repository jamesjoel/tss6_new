import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm : FormGroup;
    check = false;
     errMsg = "";


  constructor(
       private _fb : FormBuilder,
       private _router : Router,
       private _ls : LoginService
  ) { 
    this.loginForm = this._fb.group({
          email : ["", [Validators.required, Validators.email]],
          password : ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit(){
    if(this.loginForm.invalid){
        this.check = true;
    }else{
      this._ls.loginData(this.loginForm.value).subscribe(result=>{
            //  console.log(result);
             if(result.success == false){
              if(result.type == 1){
                this.errMsg = "This Username/Email & Password Is Incorrect "
              }else{
                if(result.type == 2 ){
                  this.errMsg = "Your Password Is Incorrect "

                }
              }
             }else{
              console.log(result);
              
              localStorage.setItem("token", result.token);
              this._router.navigate(["/"]);
             }
      })
    }
  }

}
