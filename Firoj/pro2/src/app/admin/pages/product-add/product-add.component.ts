import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CateService } from 'src/app/services/cate.service';



@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

 proForm : FormGroup
 allCate : any;
 allProduct : any;
   check = false;
   id : any;
  constructor(
    private _fb : FormBuilder,
    private _pro : ProductService,
    private _router : Router,
    private _cate : CateService,
    private _ar : ActivatedRoute
  ) {
    this.proForm = this._fb.group({
      _id : [],
      name : ["", Validators.required],
      price : [null, Validators.required],
      discount : ["", Validators.required],
      category : ["", Validators.required],
      discription : ["", Validators.required],
      image : ["", Validators.required],
    })

    this._pro.getAll().subscribe(result=>{
      this.allProduct = result;

      this._cate.getAll().subscribe(result=>{
        this.allCate = result;
      })
    })

    this.id = this._ar.snapshot.paramMap.get("id");
    if(this.id){
      this.proForm.controls['image'].clearValidators();
      this._pro.getOne(this.id).subscribe(result=>{
        // console.log(result);
        delete result.__v;
        result.image="";
        this.proForm.setValue(result);
        
      })
    }

   }

  ngOnInit(): void {
  }

  submit(img: any){
    if(this.proForm.invalid){
         this.check = true;
         return;
    }
    let form = new FormData();
      if( img.files[0] !==undefined){
        let obj = img.files[0];
        form.append("image", obj);

      }
      form.append("formData", JSON.stringify(this.proForm.value));
      if(this.id){
        this._pro.updateOne(this.id, form).subscribe(result=>{
        
          this._router.navigate(["/admin/productList"]);
        })
      }else{

        
        this._pro.save(form).subscribe(result=>{
          console.log(result);
          this._router.navigate(["/admin/productList"]);
        })
      }
    
  }

}
