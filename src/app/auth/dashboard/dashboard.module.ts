import { NgModule } from "@angular/core";
import { ProfileComponent } from './profile/profile.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports :[
        DashboardRoutingModule,
        MaterialModule,
        BrowserAnimationsModule
    ],
    exports :[
        ProfileComponent
    ]
})
export class DashboardModule{

}
        