import { Component, OnInit } from '@angular/core';
import { CateService } from 'src/app/services/cate.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  addCate : FormGroup
    check = false;
    cateData : any;
    cateOne : any;
    checkUpdate = false;
    delItem : any;

  constructor(
   private _fb : FormBuilder,
   private _cate : CateService,
   private _router : Router
  ) { 
    this.addCate = this._fb.group({
      name : ["", Validators.required]
    })

    this._cate.getAll().subscribe(result=>{
      this.cateData = result;
    })
  }

  ngOnInit(): void {
  }

submit(){
  if(this.addCate.invalid){
    this.check = true;
    return;


  }else{
    if(this.checkUpdate == true){

       this._cate.updateOne(this.cateOne._id, this.addCate.value).subscribe(result=>{
        let n = this.cateData.indexOf(this.cateOne);
        this.cateData[n] = this.addCate.value;
        this.cancelUpdate();

       })

    }else{

      this._cate.save(this.addCate.value).subscribe(result=>{
        this.cateData.push(result);
        this.addCate.controls['name'].setValue("");
        
      })
    }
  }
}

askDelete(obj : any){
  // console.log(obj);
  this.cateOne = obj;
  this.delItem = { name : obj.name, label : "Category"}
}

confDelete(btn : any){
  this._cate.delete(this.cateOne._id).subscribe(result=>{
    // console.log(result);
    let n = this.cateData.indexOf(this.cateOne);
    this.cateData.splice(n, 1);
    btn.click();
    
  })
}

askUpdate(obj : any){
  this.checkUpdate = true;
  // console.log(obj);
  this.cateOne = obj;
  this.addCate.controls['name'].setValue(this.cateOne.name);
}

cancelUpdate(){
  this.checkUpdate = false;
  this.cateOne = {};
  this.addCate.controls['name'].setValue("");
}

}
