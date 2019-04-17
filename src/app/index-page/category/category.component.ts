import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventlist } from 'src/app/event-list/model/event-list.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cat:Eventlist[]=[];
  constructor(public listC:MyServiceService,
    private  route:ActivatedRoute,
    public navroute: Router ) { }

geteventlist(categoryid:number){

  this.listC.categoryid = categoryid;
     this.navroute.navigate(['browseevents']);
     //console.log(categoryid);
  
}

  ngOnInit() {

    // this.listC.geteventlist().subscribe((data :any[])=>{
    //   console.log(data);
    //   this.cat = data;
    // });
  }

}
