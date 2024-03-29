import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allPro : any;
  constructor(
    public _pro : ProductService
  ) {
    this._pro.getAll().subscribe(result=>{
      this.allPro = result;
    })
  }

  ngOnInit(): void {
  }

}
