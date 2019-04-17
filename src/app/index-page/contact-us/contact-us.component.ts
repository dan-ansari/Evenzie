import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactDetails } from './contact.model';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }


  contactdet :ContactDetails[]=[];
  @ViewChild('contact') contact:NgForm;
  contactformsubmit(form: NgForm){

    console.log(form) ; 
    this.contactdet=this.contact.value;
    console.log(this.contactdet);
  }

}
