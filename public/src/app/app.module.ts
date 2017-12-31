import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { RoutingModule } from './/routing.module';
import { HttpModule } from "./http/http.module";
import { ReportsModule } from './reports/reports.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    ReportsModule,
    FormsModule,
    RoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
