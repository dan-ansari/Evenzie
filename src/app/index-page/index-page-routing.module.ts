import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './index-page.component';
import { HomeComponent } from './home/home.component';
import { PopularEventsComponent } from './popular-events/popular-events.component';
import { CategoryComponent } from './category/category.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const indexpageroutes:Routes =[
    {path :'', component :IndexPageComponent, children:[
        {path:'',component :HomeComponent},
        {path:'home',component :HomeComponent},
        {path:'popular-events',component:PopularEventsComponent},
        {path :'category',component:CategoryComponent},
        {path :'gallery',component :GalleryComponent},
        {path :'header',component :HeaderComponent},
       // {path:'news',component:NewsComponent},
        {path:'footer',component:FooterComponent},
        {path:'aboutus',component:AboutusComponent},
        {path:'contactus',component:ContactUsComponent}
    ]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(indexpageroutes)
    ],
    exports:[
        RouterModule
    ]
})

export class IndexPageRoutingModule{

}