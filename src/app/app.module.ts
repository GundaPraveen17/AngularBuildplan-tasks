import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { FaculaityComponent } from './faculaity/faculaity.component';
import { BangloreFaculaityComponent } from './banglore-faculaity/banglore-faculaity.component';
import { MysoreFaculaityComponent } from './mysore-faculaity/mysore-faculaity.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerdetailsComponent,
    FaculaityComponent,
    BangloreFaculaityComponent,
    MysoreFaculaityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
