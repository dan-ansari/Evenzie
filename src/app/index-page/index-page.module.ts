import { NgModule } from "@angular/core";
import { IndexPageRoutingModule } from './index-page-routing.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopularEventsComponent } from './popular-events/popular-events.component';

import { CategoryComponent } from './category/category.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
        PopularEventsComponent,
        CategoryComponent,
        GalleryComponent,
        HomeComponent,
        AboutusComponent,
        ContactUsComponent



    ],
    imports:[
        CommonModule,
        IndexPageRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgbModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        PopularEventsComponent,
        CategoryComponent,
        GalleryComponent,
        HomeComponent,
        ContactUsComponent,
        AboutusComponent

    ]

})

export class IndexPageModule{

}