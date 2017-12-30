import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBillingReportComponent } from './customer-billing-report.component';

describe('CustomerBillingReportComponent', () => {
  let component: CustomerBillingReportComponent;
  let fixture: ComponentFixture<CustomerBillingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBillingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBillingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
