import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from "./edit-customer/edit-customer.component";

const routes: Routes = [
    { path: '', component: ListCustomerComponent },
    { path: 'new', component: CreateCustomerComponent },
    { path: 'edit', component: EditCustomerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class CustomerRouteModule { }