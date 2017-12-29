import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerRouteModule } from "./customer-route.module";
import { MainCustomerComponent } from "./main-customer/main-customer.component";
import { CustomerHttpService } from './services/customer-http.service';

@NgModule({
  imports: [
    CommonModule,
    CustomerRouteModule,
    ReactiveFormsModule
  ],
  providers: [CustomerHttpService],
  declarations: [MainCustomerComponent, ListCustomerComponent, CreateCustomerComponent, EditCustomerComponent]
})
export class CustomerModule { }
