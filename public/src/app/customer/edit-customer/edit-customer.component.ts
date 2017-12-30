import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { CustomerHttpService } from './../services/customer-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import * as moment from 'moment';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  
  rForm: FormGroup;
  addressModel: FormArray;
  customer: any;

  constructor(private fb: FormBuilder, private customerHttpService: CustomerHttpService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.getCustomer(params.id)
        .subscribe((customers: any[]) => {
          console.log(customers);
          this.customer = customers[0];
          this.createForms(this.customer);
        });
    });
  }

  createForms(customer: any): Promise<FormGroup> {
    this.rForm = this.fb.group({
      name: [customer.name, Validators.required],
      email: [customer.email, Validators.compose([ Validators.email, Validators.required ])],
      mobileNumber: [customer.mobileNumber, Validators.compose([ Validators.maxLength(10), Validators.required ])],
      phoneNumber: [customer.phoneNumber, Validators.compose([ Validators.maxLength(12) ])],
      addresses: this.fb.array(this.createAddressList(customer.addresses)),
      dob: [moment(customer.dob).format('YYYY-MM-DD'), Validators.required]
    });
    return Promise.resolve(this.rForm);
  } 

  get addressData() {
    return this.rForm.get('addresses') as FormArray;
  }

  getCustomer(id): Observable<any[]> {
    let where: {[key: string]: string} = {_id: id}
    return this.customerHttpService.getCustomer(where);
  }

  createAddressList(addresses: any[]): FormGroup[] {
    let _ret: FormGroup[] = [];
    addresses.forEach(addr => {
      _ret.push(this.createAddress(addr))
    });
    return _ret;
  }

  createAddress(addr?: {[key: string]: string| number}): FormGroup {
    if (!addr)
      addr = {};
    return this.fb.group({
      flat: [addr.flat, Validators.required],
      street: [addr.street, Validators.required],
      state: [addr.state, Validators.required],
      pincode: [addr.pincode, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('^[1-9][0-9]{5}$')])]
    });
  }

  addAddress(): void {
    this.addressModel = this.rForm.get('addresses') as FormArray;
    if (this.addressModel.valid || !this.addressModel.controls.length)
      this.addressModel.push(this.createAddress());
    else if (this.addressModel.controls.length)
      this.addressModel.controls[this.addressModel.controls.length - 1].markAsTouched();
  }

  deleteAddress(i: number): void {
    this.addressModel = this.rForm.get('addresses') as FormArray;
    this.addressModel.removeAt(i);
  }

  onSubmit(data:any) {
    this.customerHttpService.updateContact(this.customer._id, data)
      .subscribe(data => {
        this.router.navigateByUrl('/');
        console.log(data);
      }, (err) => {
        console.error(err);
      });
  }

}
