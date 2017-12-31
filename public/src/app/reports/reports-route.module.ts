import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerBillingReportComponent } from "./customer-billing-report/customer-billing-report.component";

let router: Routes = [
    {path: 'billing/:id', component: CustomerBillingReportComponent}
];

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class ReportsRouteModule { }