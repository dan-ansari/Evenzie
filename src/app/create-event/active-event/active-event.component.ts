import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { EventDetails } from '../models/eventdetails.model';
import { NgForm } from '@angular/forms';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MyServiceService } from 'src/app/my-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Eventlist } from 'src/app/event-list/model/event-list.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-active-event',
  templateUrl: './active-event.component.html',
  styleUrls: ['./active-event.component.css']
})
export class ActiveEventComponent implements OnInit {

  eventlist : Eventlist[]=[];
  eventdetail :Eventlist[]=[];
  event: EventEmitter<any> = new EventEmitter();
  private crevent : Observable <Eventlist>;
  constructor(public createevent:MyServiceService,
    private  route: ActivatedRoute,
              public navroute: Router,
              private http: HttpClient     ) { }

  ngOnInit() {
    this.createevent.geteventlist().subscribe(data =>
      this.successrow(data), err =>
      this.failedrow(err));
    
  } 
  successrow(data){
 this.eventlist = JSON.parse(data);
 console.log(this.eventlist);
//  this.createevent.addPost(this.eventdetail);
 console.log(this.createevent);
 this.createevent.seteventlist(this.eventlist);


  }
  failedrow(err){
    console.log("Error hai yaha");
  }
  
  

  @ViewChild('eventdet') eventdet:NgForm;
  eventformsubmit(form: NgForm){

    console.log(form) ; 
    this.eventdetail=this.eventdet.value;
    console.log(this.eventdetail);
    this.createevent.addPost(this.eventdetail);
    this.eventdet.value.event_id = this.createevent.dataLength();
    this.eventdet.value.event_id = this.eventdet.value.event_id.toString();
    this.eventdet.value.start_date = this.eventdet.value.start_date.toString();
    this.event.emit({data: this.eventdet});
  }
  setreset(){
    this.eventdet.reset();
    this.eventdet.resetForm();
  }

  connect(): Observable<Eventlist[]> {
    return this.createevent.getData();
  }

  disconnect() {
  }


}
