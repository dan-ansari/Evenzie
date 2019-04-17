import { NgModule } from "@angular/core";
import { ActiveEventComponent } from './active-event/active-event.component';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreateEventRoutingModule } from './create-event-routing.module';
import { CreateEventComponent } from './create-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperIntl } from '@angular/material';


@NgModule({
    declarations:[ActiveEventComponent
    ],
    imports:[
        CreateEventRoutingModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule
        

    ],
    exports:[

    ],
    
})
export class CreateEventModule{
    
}