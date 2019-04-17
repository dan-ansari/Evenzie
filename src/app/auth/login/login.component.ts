import { Component, OnInit, ViewChild } from '@angular/core';
//import {FormControl, Validators, NgModel} from '@angular/forms';
//import { MatDialog } from '@angular/material'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { LoginDetails } from '../models/logindetails.model';
import { MyServiceService } from 'src/app/my-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
//}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  users : LoginDetails[]=[];
  array : string;
  
  constructor(
    public user:MyServiceService,
              private  route: ActivatedRoute,
              public navroute: Router,
              private http: HttpClient
  ) {
    
   }

   ngOnInit() {
    
    
    this.user.getusers().subscribe(data =>
      this.successrow(data), err =>
      this.failedrow(err));
    
  } 
  successrow(data){
 this.users = JSON.parse(data);
 this.array = JSON.stringify(data)
 console.log(this.users);
    
  }
  failedrow(err){
    console.log("Something went wrong");
  }
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // matcher = new MyErrorStateMatcher();
  //email = ('',[Validators.required, Validators.email]);
  hide=true;

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('this.email') ? 'Not a valid email':'';
  // }

  dailogbox(){
    alert("Invalid Credentials");
  }

  logindetails :LoginDetails[]=[];
  @ViewChild('login') login:NgForm;
  loginformsubmit(form: NgForm){

    //console.log(form) ; 
    this.logindetails=this.login.value;
    console.log(this.logindetails);
  }
  fetchdet(userdet :LoginDetails[]){
    
  }
  checkdetails(){
    for (let index = 0; index < this.users.length; index++) {
      const element = this.users[index];
      // console.log(this.users.length);
     if (this.login.value.user_email == element.user_email && this.login.value.password == element.password ){
     //this.logindetails

     console.log("login successful");
     this.navroute.navigate(['/dashboard']);

     break;
    }
     else 
     console.log("login failes");
     this.dailogbox();
     
     
    
  }
  //this.dailogbox();
  }


}