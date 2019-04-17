import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showlogin = false;
  showprofile = true;
  constructor() { }

  ngOnInit() {
  }

  

  
}
