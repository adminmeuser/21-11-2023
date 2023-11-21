import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { WilscardComponent } from './wilscard/wilscard.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
// import { StudentComponent } from './layout/student/student.component';
// import { ProductsComponent } from './products/products.component';
// import { ProductDetailsComponent } from './products/product-details/product-details.component';


// import { ChildComponent } from './child/child.component';
// import { CompleteComponent } from './complete/complete.component';
// import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    WilscardComponent,
    ServicesComponent,
    ProfileComponent,
    // StudentComponent,
    // ProductsComponent,
    // ProductDetailsComponent,
  
    // ChildComponent,
    // CompleteComponent,
    // ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
