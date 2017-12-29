import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  private customerList: any[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/Customer/list')
      .subscribe((data: any[]) => {
        this.customerList = data;
      });
  }

}
