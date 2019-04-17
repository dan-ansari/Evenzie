import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';




const dashroutes: Routes=[
    {path:'',component:DashboardComponent,children:[
        {path:'user-edit',component:ProfileComponent}
    ]}
]
@NgModule({
    imports:[RouterModule.forChild(dashroutes)
    ],
    exports:[RouterModule]

})
export class DashboardRoutingModule{

}