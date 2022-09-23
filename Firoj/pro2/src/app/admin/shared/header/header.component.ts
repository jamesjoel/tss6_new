import { Component, OnInit } from '@angular/core';
import { AdminloginService } from '../../services/adminlogin.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public _als : AdminloginService,
    
  ) { }

  ngOnInit(): void {
  }

}
