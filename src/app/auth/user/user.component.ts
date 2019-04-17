import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { LoginDetails } from '../models/logindetails.model';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  hide = true;
  hide1 =true;
  passmatcher ;
  password:string;
   cpassword : string;

  constructor() { 
    
  }

  ngOnInit() {
  }

  signupdetails :LoginDetails[]=[];

  @ViewChild('signup') signup:NgForm;
  signupformsubmit(form: NgForm){

    console.log(form) ; 
    this.signupdetails=this.signup.value;
    console.log(this.signupdetails);
  }

  //password validator
  
  dailogbox(){
    

  }
  checkpass(){
    this.password = this.cpassword;
    
    
  
  }

}
