import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { IndexPageModule } from './index-page/index-page.module';

import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsComponent } from './events/events.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { EventListComponent } from './event-list/event-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { AuthComponent } from './auth/auth.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthModule } from './auth/auth.module';
import { CreateEventModule } from './create-event/create-event.module';
//import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    EventDetailsComponent,
    EventsComponent,
    EventListComponent,
    IndexPageComponent,
    
    CreateEventComponent,
    AuthComponent
    // ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IndexPageModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    NgbModule,

    AuthModule,
    CreateEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
