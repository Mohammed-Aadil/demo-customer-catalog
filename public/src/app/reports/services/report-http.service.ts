import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReportHttpService {

  constructor(private http: HttpClient) { }

  getReport (customerId: string) {
    return this.http.get('/api/Bill/customer/' + customerId);
  }
}
