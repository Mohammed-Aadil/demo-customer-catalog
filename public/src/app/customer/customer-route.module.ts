import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditCustomerComponent } from "./edit-customer/edit-customer.component";
import { MainCustomerComponent } from './main-customer/main-customer.component';

const routes: Routes = [
    { 
        path: '', 
        component: MainCustomerComponent,
        children: [
            { path: '', component: ListCustomerComponent },
            { path: 'create', component: CreateCustomerComponent },
            { path: 'edit/:id', component: EditCustomerComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CustomerRouteModule { }