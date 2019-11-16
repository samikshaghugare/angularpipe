import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    ContactComponent,
    NotfoundComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:VehicleComponent},
      {path:'vehicle',component:VehicleComponent},
      {path:'contact',component:ContactComponent},
      {path:'**',component:NotfoundComponent}

    ]),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

