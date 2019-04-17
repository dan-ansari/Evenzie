import { IndexPageComponent } from "./index-page/index-page.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
//import { ProfileComponent } from './profile/profile.component';
//import { DashboardComponent } from './dashboard/dashboard.component';

const approutes:Routes =[
    {path:'index',component :IndexPageComponent},
    {path:'browseevents',component:EventsComponent},
    {path:'browseevents/:catid',component:EventsComponent},
    {path:'ticket',component:TicketsComponent},
    {path:'ticket/:id',component:TicketsComponent},
    {path: 'create-event', component: CreateEventComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'dashboard',component : DashboardComponent}
   // {path: 'profile',component:ProfileComponent}
    //{path: 'dashboard', component: DashboardComponent}
];
@NgModule({
    imports :[RouterModule.forRoot(approutes)
    ],
    exports:[RouterModule
            ]

})
export class AppRoutingModule{

}