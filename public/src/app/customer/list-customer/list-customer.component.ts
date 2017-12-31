import { Component, OnInit } from '@angular/core';
import { CustomerHttpService } from '../services/customer-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  public customerList: any;
  private page:string = '1';
  constructor(private customerHttpService: CustomerHttpService, private route: ActivatedRoute) {
    route.queryParams.subscribe((params) => {
      this.page = params.page || '1';
    });
  }

  getCustomer(page: string) {
    this.customerHttpService.getCustomer({}, page)
      .subscribe((data: any) => {
        this.customerList = data;
      });
  }

  ngOnInit() {
    this.getCustomer(this.page);
  }

  get customerCount () {
    if (this.customerList)
      return '( ' + this.customerList.docs.length + ' of ' + this.customerList.total + ' )';
    else return '';
  }

  get totalPages () {
    let pages = Array(this.customerList.pages - this.customerList.page + 1).fill(null).map((value, index) => index + this.customerList.page);
    return pages;
  }

  paginateCustomer (page: string) {
    
    this.getCustomer(page);
  }
  
  deleteCustomer (id) {
    this.customerHttpService.deleteCustomer(id)
      .subscribe(data => {
        console.log(data);
        return this.getCustomer(this.page);
      })
  }
}
