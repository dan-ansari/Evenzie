import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const authroutes: Routes=[
    {path:'',component:AuthComponent,children:[
        {path:'user',component:UserComponent},
        {path:'login',component:LoginComponent},
        {path:'',component:LoginComponent}]},
    {path:'dashoard',component:DashboardComponent,children:[
    ]}
    

]

@NgModule({
    imports:[RouterModule.forChild(authroutes)
    ],
    exports:[RouterModule]

})
export class AuthRoutingModule{

}