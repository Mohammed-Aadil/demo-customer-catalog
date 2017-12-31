import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './customer/customer.module#CustomerModule' },
  { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class RoutingModule { }
