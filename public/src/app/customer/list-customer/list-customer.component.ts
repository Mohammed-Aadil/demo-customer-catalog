import { Component, OnInit } from '@angular/core';
import { CustomerHttpService } from '../services/customer-http.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  public customerList: any;
  private page:string = '1';
  private filter:{[key: string]: any} = {};
  public sForm: FormGroup;

  constructor(private customerHttpService: CustomerHttpService, private route: ActivatedRoute, private fb: FormBuilder) {
    route.queryParams.subscribe((params) => {
      this.page = params.page || '1';
    });
  }

  getCustomer(filter:{[key: string]: any}, page: string) {
    this.customerHttpService.getCustomer(filter, page)
      .subscribe((data: any) => {
        this.customerList = data;
      });
  }

  ngOnInit() {
    this.sForm = this.fb.group({
      name: [null],
      mobileNumber: [null],
      phoneNumber: [null],
      dob: [null],
      address: [null]
    });
    this.getCustomer(this.filter, this.page);
  }

  get customerCount () {
    if (this.customerList)
      return '( ' + this.customerList.docs.length + ' of ' + this.customerList.total + ' )';
    else return '';
  }

  get totalPages () {
    let pages = [];
    if (this.customerList)
      pages = Array(this.customerList.pages - this.customerList.page + 1).fill(null).map((value, index) => index + this.customerList.page);
    return pages;
  }

  paginateCustomer (page: string) {
    this.page = page;
    this.getCustomer(this.filter, page);
  }
  
  deleteCustomer (id:string) {
    this.customerHttpService.deleteCustomer(id)
      .subscribe(data => {
        console.log(data);
        return this.getCustomer(this.filter, this.page);
      })
  }

  onSearchSubmit($event, data) {
    if ($event.keyCode === 13) {
      this.filter = {};
      for (var key in data) {
        if (data.hasOwnProperty(key) && data[key])
          this.filter[key] = data[key];
      }
      this.getCustomer(this.filter, this.page)
    }    
  }
}
