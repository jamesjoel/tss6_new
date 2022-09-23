import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { CityService } from '../../../services/city.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


      // FormBuilder-----Service
      // FormGroup-------Interface

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
      signupForm : FormGroup;
      allCity : any;
      check = false;
  constructor(
    private _fb : FormBuilder,
    // private _http : HttpClient,
    private _city : CityService,
    private _user : UserService,
    private _router : Router
    
  ) {
      this.signupForm = this._fb.group({
        fullname : ["", Validators.required],
        email : ["", [Validators.required, Validators.email]],
        password : ["", Validators.required],
        re_password : ["", Validators.required],
        address : ["", Validators.required],
        contact : ["", Validators.required],
        gender : ["", Validators.required],
        city : ["", Validators.required]

      
      })

      this._city.allCity().subscribe(result=>{
        // console.log(result);
        this.allCity = result;
      })
   }

  ngOnInit(): void {
  }

  submit(){

    // console.log(this.signupForm.value);
   if(this.signupForm.invalid){
     this.check = true;   

   }else{

     this._user.saveData(this.signupForm.value).subscribe(result=>{
      //  console.log(result);
          this._router.navigate(["/login"]);
      })
   }
       

    
  }

}
