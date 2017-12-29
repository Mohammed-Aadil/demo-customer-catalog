import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormArray } from '@angular/forms';
import { CustomerHttpService } from './../services/customer-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  rForm: FormGroup;
  addressModel: FormArray;

  constructor(private http: HttpClient, private fb: FormBuilder, private customerHttpService: CustomerHttpService, private router: Router) {
  }

  ngOnInit() {
    this.rForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([ Validators.email, Validators.required ])],
      mobileNumber: [null, Validators.compose([ Validators.maxLength(10), Validators.required ])],
      phoneNumber: [null, Validators.compose([ Validators.maxLength(12) ])],
      addresses: this.fb.array([this.createAddress()]),
      dob: [null, Validators.required]
    });
  }

  createAddress(): FormGroup {
    return this.fb.group({
      flat: [null, Validators.required],
      street: [null, Validators.required],
      state: [null, Validators.required],
      pincode: [null, Validators.required]
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
    this.customerHttpService.createCustomer(data)
      .subscribe(data => {
        this.router.navigateByUrl('/');
        console.log(data);
      }, (err) => {
        console.error(err);
      });
  }
}
