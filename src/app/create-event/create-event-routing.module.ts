import { CreateEventComponent } from "./create-event.component";
import { ActiveEventComponent } from './active-event/active-event.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const createeventroutes: Routes=[
    {path:'',component:CreateEventComponent, children:[
     //   {path:'',component:ActiveEventComponent},
        {path:'active-event',component:ActiveEventComponent}
        
        
    ]}
]

@NgModule({
    imports:[RouterModule.forChild(createeventroutes)
    ],
    exports:[RouterModule
    ]
})

export class CreateEventRoutingModule{

}