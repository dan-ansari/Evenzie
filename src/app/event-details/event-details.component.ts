import { Component, OnInit } from '@angular/core';

import { MyServiceService } from '../my-service.service';
import { Eventlist } from '../event-list/model/event-list.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
 eventdetails: Eventlist;

  details: Eventlist[]=[];
  constructor(public tic:MyServiceService) { }

  ngOnInit() {
    this.tic.geteventlist().subscribe(data =>
      this.successrow(data), err =>
      this.failedrow(err));
    //this.details=this.tic.geteventlist();

//  this.eventdetails = this.tic.showeventdet().find(event => event.event_id === this.tic.seteventdet() );
 //console.log(this.tic.showeventdet());
//  console.log(this.eventdetails);

 

   
    
  }

  successrow(data){
    this.eventdetails=JSON.parse(data);
    this.eventdetails = this.tic.showeventdet().find(event => event.event_id === this.tic.geteventdet() );
    console.log(this.eventdetails);


  }
  failedrow(err){
    console.log("Something went wrong");
  }

}
