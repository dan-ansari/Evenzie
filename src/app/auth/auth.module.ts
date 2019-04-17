import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeaderComponent } from '../index-page/header/header.component';

@NgModule({
    declarations: [
        LoginComponent,
        UserComponent,
        DashboardComponent
      ],
    imports:[
        AuthRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        BrowserModule,
        DashboardModule,


    ],
    exports:[
        LoginComponent,
        UserComponent,
        DashboardComponent
    ]
})
export class AuthModule{

}