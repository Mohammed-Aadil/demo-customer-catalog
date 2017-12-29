import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerRouteModule } from "./customer-route.module";

@NgModule({
  imports: [
    CommonModule,
    CustomerRouteModule
  ],
  declarations: [ListCustomerComponent, CreateCustomerComponent, EditCustomerComponent]
})
export class CustomerModule { }
