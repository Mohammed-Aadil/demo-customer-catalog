import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerBillingReportComponent } from './customer-billing-report/customer-billing-report.component';
import { ReportsRouteModule } from './reports-route.module';
import { ReportHttpService } from './services/report-http.service';

@NgModule({
  imports: [
    CommonModule,
    ReportsRouteModule
  ],
  providers: [ReportHttpService],
  declarations: [CustomerBillingReportComponent]
})
export class ReportsModule { }
