import { TestBed, inject } from '@angular/core/testing';

import { CustomerHttpService } from './customer-http.service';

describe('CustomerHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerHttpService]
    });
  });

  it('should be created', inject([CustomerHttpService], (service: CustomerHttpService) => {
    expect(service).toBeTruthy();
  }));
});
