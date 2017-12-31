import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportHttpService } from './../services/report-http.service';

@Component({
  selector: 'app-customer-billing-report',
  templateUrl: './customer-billing-report.component.html',
  styleUrls: ['./customer-billing-report.component.css']
})
export class CustomerBillingReportComponent implements OnInit {

  public report: any;
  constructor(private route: ActivatedRoute, private reportHttpService: ReportHttpService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.reportHttpService.getReport(params.id)
        .subscribe(report => {
          console.log(report);
          this.report = report;
        });
    });
  }

}
