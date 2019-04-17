import { Injectable } from '@angular/core';
import { Eventlist } from './event-list/model/event-list.model';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginDetails } from './auth/models/logindetails.model';
//import { Eventdetails } from './event-details/model/event-details.model';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  eventid:number;
  categoryid:number = 0;
  lists : Eventlist[]=[];
  login : any[]=[];

  API_URL:string = "http://localhost/cirestapidemo/";

  constructor(private http:HttpClient) { }

  getusers()
  {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
 
    return this.http.get(this.API_URL+"Home/users",{
      headers: {"Access-Control-Allow-Origin": "*"} });  }

 
  geteventlist()
  {
   const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
 
    return this.http.get(this.API_URL+"Home/events",{
      headers: {"Access-Control-Allow-Origin": "*"} });
    //return this.http.get(this.API_URL+"Home/users");
  }
  // seteventlist(fault :Eventlist[]){
  //   this.lists = fault;
  //   this.showeventdet();

  // }
  geteventdet(){
    return this.eventid;
  }
  showeventdet(){
    return this.lists;
  }
  getcatid(){
    return this.categoryid;
  }
  getData(): Observable<Eventlist[]> {
    return of<Eventlist[]>(this.lists);
  }
  addPost(data) {
    console.log(this.lists);
    this.lists.push(data);
    console.log(this.lists);
    //return this.lists;
  }
  seteventlist(fault :Eventlist[]){
    this.lists = fault;
    //this.showeventdet();
  

  }
  
  dataLength(){
    return this.lists.length;
  }

  setusers(data :any){

    this.login = data;
    console.log(this.login);

  }

  
}

 
//   geteventlist()
// {
//   this.lists=[{id:1,event_name:'Raita',organizer:'IPS Academy',date:'13-03-2019',venue:'IPS Academy ,Rajendra nagr,              Indore',start:'13-03-2019',end:'16-03-2019',price:200,catid:1, categories:'DJ night',tags:'#music,                dance', abouttheevent:'Arijit Singh is coming'},
//              {id:2,event_name:'AAkshank',organizer:'Acropolis',date:'14-03-2019',start:'14-03-2019',end:'17-03-2019',price:300,catid:2,categories:'concert',tags:'#music,dance,band',venue:'IPS Academy,rajendra nagar,Indore',abouttheevent:'Arijit Singh is coming'},
//              {id:3,event_name:'Roobaroo',organizer:'MANIT',date:'15-03-2019',venue:'MANIT,mata mandir ,Bhopal',start:'15-03-2019',end:'18-03-2019',price:400,catid:3,categories:'EDM night',tags:'#music,dance',abouttheevent:'Arijit Singh is coming'},
//              {id:4,event_name:'Raita',organizer:'IPS Academy',date:'16-03-2019',venue:'IPS Academy ,Rajendra nagr,Indore',start:'16-03-2019',end:'18-03-2019',price:500,catid:1,categories:'DJ night',tags:'#music,dance',abouttheevent:'Arijit Singh is coming'},
//              {id:5,event_name:'Moodi',organizer:'IIT Bombay',date:'20-03-2019',venue:'IIT Bomaby,mata mandir ,Mumbai',start:'20-03-2019',end:'23-03-2019',price:600,catid:4,categories:'Annual Festival',tags:'#Fun,games',abouttheevent:'Arijit Singh is coming'},
//              {id:6,event_name:'Imagica',organizer:'Disney',date:'25-03-2019',venue:'Baandhra,Mumbai',start:'25-03-2019',end:'28-03-2019',price:800,catid:2,categories:'concert',tags:'#Fun,Food',abouttheevent:'Arijit Singh is coming'},
//              {id:7,event_name:'Water show',organizer:'UAE govt.',date:'30-03-2019',venue:'Dubai',start:'30-03-2019',end:'28-03-2019',price:1000,catid:5,categories:'Water Show',tags:'#music,,festival',abouttheevent:'Arijit Singh is coming'}
//          ];
//   return this.lists;
// }




// eventdetails :Eventdetails[]=[];
// geteventdetails()
// {
//   this.eventdetails=[{id:1,start:'13-03-2019',end:'16-03-2019',price:'200rs',categories:'DJ night',tags:'#music,dance',venue:'IPS Academy,rajendra nagar,Indore',organizers:'Danish Ansari and Hrishabh Raj Arora',abouttheevent:'Arijit Singh is coming'},
//   {id:2,start:'14-03-2019',end:'17-03-2019',price:'200rs',categories:'DJ night',tags:'#music,dance',venue:'IPS Academy,rajendra nagar,Indore',organizers:'Danish Ansari and Hrishabh Raj Arora',abouttheevent:'Arijit Singh is coming'},
//   {id:3,start:'15-03-2019',end:'18-03-2019',price:'200rs',categories:'DJ night',tags:'#music,dance',venue:'IPS Academy,rajendra nagar,Indore',organizers:'Danish Ansari and Hrishabh Raj Arora',abouttheevent:'Arijit Singh is coming'},
//   {id:4,start:'15-03-2019',end:'18-03-2019',price:'200rs',categories:'DJ night',tags:'#music,dance',venue:'IPS Academy,rajendra nagar,Indore',organizers:'Danish Ansari and Hrishabh Raj Arora',abouttheevent:'Arijit Singh is coming'},
//   {id:5,start:'20-03-2019',end:'23-03-2019',price:'200rs',categories:'DJ night',tags:'#music,dance',venue:'IPS Academy,rajendra nagar,Indore',organizers:'Danish Ansari and Hrishabh Raj Arora',abouttheevent:'Arijit Singh is coming'},
//   {id:6,start:'25-03-2019',end:'28-03-2019',price:'200rs',categories:'DJ night',tags:'#music,dance',venue:'IPS Academy,rajendra nagar,Indore',organizers:'Danish Ansari and Hrishabh Raj Arora',abouttheevent:'Arijit Singh is coming'},


//   ];
//   return this.eventdetails;
// }






