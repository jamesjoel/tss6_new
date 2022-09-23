import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CateService } from 'src/app/services/cate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cateData : any;
  constructor(
    public _ls : LoginService,
    public _cate : CateService
  ) { 
    this._cate.getAll().subscribe(result=>{
      this.cateData = result;
    })
  }

  ngOnInit(): void {
  }

}
