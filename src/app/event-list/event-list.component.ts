import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Eventlist } from './model/event-list.model';
import { MyServiceService } from '../my-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

 public displayedColumns: string[] = [ 'event_name', 'organizer', 'venue','date','details'];
 
 dataSource: MatTableDataSource<Eventlist>;
 //public dataSource = new MatTableDataSource <Eventlist>();
 private eventob : Observable <Eventlist[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  events : Eventlist[]=[];
  event : Eventlist[]=[];
  testevents: Eventlist[] = [];
  constructor(public list:MyServiceService,
              private  route: ActivatedRoute,
              public navroute: Router,
              private http: HttpClient
              ) {
    // Create 100 users
   //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    
  }

  ngOnInit() {
    
    
    this.list.geteventlist().subscribe(data =>
      this.successrow(data), err =>
      this.failedrow(err));
    
  } 
  successrow(data){
 this.events = JSON.parse(data);
 console.log(this.list.showeventdet());

 this.list.seteventlist(this.events);
 console.log(this.events);
 

    if(this.list.categoryid == 0){
     
      this.dataSource = new MatTableDataSource(this.events);
     // this.dataSource = this.events;
    }
    else
    {
      console.log(this.events);
      console.log(this.list.categoryid);
     // this.dataSource = new MatTableDataSource(this.events.filter(
       // event => event.category_id === this.list.categoryid));
       for(let item of this.events)
       {
         console.log("catid: " + item.category_id);
       }
       this.testevents = this.events.filter(item => item.category_id == this.list.categoryid);

       console.log("Hello" + this.testevents);
        this.dataSource = new MatTableDataSource(this.testevents);

   //   this.dataSource = this.events.filter(event => event.category_id === this.list.categoryid);
      console.log(this.dataSource);
    }

    
   
  //  this.list.seteventlist(this.events);


  //  this.dataSource.data = data as Eventlist[];
    //this.events = data;
    //const myobj = JSON.stringify(this.events);
   //this.events = data as Eventlist[];
    //console.log(JSON.parse( myobj));
     // this.events= this.list.showeventdet().filter(event => event.category_id === this.list.getcatid() );
      // console.log(this.list.getcatid()); 
      //console.log(this.dataSource);
     //  console.log(this.events);
      
  



    //this.dataSource= this.events;


    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  //  console.log (this.dataSource);

  }

 
  failedrow(err){
    console.log("Error hai yaha");
  }
  connect(): Observable<Eventlist[]> {
    return this.list.getData();
  }

 
  

  geteventdetails(eventid: number){
    this.list.eventid = eventid;
    //console.log(this.list.eventid );
     this.navroute.navigate(['ticket']);
  } 

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
//   readCollectionResult(result: any): Eventlist[] {
//     return result.data.map(asset => {
//         return {
//             id: asset.id,
//             collectionName: asset.collectionName,
//             collectionId: asset.collectionId,
//             objectType: asset.objectType,
//             displayType: asset.displayType,
//             size: asset.size,
//             createDate: asset.createDate,
//             modifiedDate: asset.modifiedDate,
//             publishedDate: asset.publishedDate,
//             parentFolderId: asset.parentFolderId
//         };
//     });
// }
  
}

 //   this.list.geteventlist().subscribe((data :Eventlist[])=>{
  //    // console.log(data);
  //     this.row = data;
  //   // console.log(this.row);
  //   });

  // //  console.log(this.row);
  //   this.dataSource = new MatTableDataSource(this.row);
  //  // console.log(this.dataSource);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
    
  
    // this.row = this.list.lists.filter(event => event.catid === this.list.categoryid );
    // console.log(this.row);
/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const event_name =
//       event_name[Math.round(Math.random() * (event_name.length - 1))] + ' ' +
//       event_name[Math.round(Math.random() * (event_name.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     event_name: name,
//     date: Math.round(Math.random() * 100).toString(),
//     venue: venue[Math.round(Math.random() * (venue.length - 1))]
//   };
// }
