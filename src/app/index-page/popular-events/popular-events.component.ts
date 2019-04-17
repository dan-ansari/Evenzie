import { Component, OnInit } from '@angular/core';
import { Eventlist } from 'src/app/event-list/model/event-list.model';
import { MyServiceService } from 'src/app/my-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popular-events',
  templateUrl: './popular-events.component.html',
  styleUrls: ['./popular-events.component.css']
})
export class PopularEventsComponent implements OnInit {

  popular:Eventlist[]=[];
  constructor(public pop:MyServiceService,
              private Route:ActivatedRoute,
              public navroute:Router,
              private http:HttpClient
               ) { }

  ngOnInit() {

    // this.pop.geteventlist().subscribe((data :any[])=>{
    //   console.log(data);
    //   this.popular = data;
    // });

  }

  geteventdetails(eventid: number){
    this.pop.eventid = eventid;
     this.navroute.navigate(['ticket']);
  } 

}
