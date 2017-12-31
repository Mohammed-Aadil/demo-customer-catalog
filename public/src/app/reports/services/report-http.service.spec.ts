import { TestBed, inject } from '@angular/core/testing';

import { ReportHttpService } from './report-http.service';

describe('ReportHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportHttpService]
    });
  });

  it('should be created', inject([ReportHttpService], (service: ReportHttpService) => {
    expect(service).toBeTruthy();
  }));
});
