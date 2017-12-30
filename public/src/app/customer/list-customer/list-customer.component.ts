import { Component, OnInit } from '@angular/core';
import { CustomerHttpService } from '../services/customer-http.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  public customerList: any[];
  constructor(private customerHttpService: CustomerHttpService) { }

  getCustomer() {
    this.customerHttpService.getCustomer({})
      .subscribe((data: any[]) => {
        this.customerList = data;
      });
  }

  ngOnInit() {
    this.getCustomer();
  }

  deleteCustomer (id) {
    this.customerHttpService.deleteCustomer(id)
      .subscribe(data => {
        console.log(data);
        return this.getCustomer();
      })
  }
}
