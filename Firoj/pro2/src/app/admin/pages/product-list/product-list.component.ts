import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

   allPro : any;
   product : any;
   delItem : any;
   
   d=new Date();

  constructor(
    private _pro : ProductService
  ) { 
    this._pro.getAll().subscribe(result=>{
      this.allPro = result;
    })

    setInterval(()=>{
      this.d = new Date();
    },1000);
  }

  ngOnInit(): void {
  }
 
   
 
askDelete(obj : any){
  this.product = obj;
  this.delItem = { name : obj.name, label : "Product"};
}
deleteOne(btn : any){
  this._pro.delete(this.product._id).subscribe(result=>{
    let n = this.allPro.indexOf(this.product);
    this.allPro.splice(n, 1);
    btn.click();
  })
}

}
