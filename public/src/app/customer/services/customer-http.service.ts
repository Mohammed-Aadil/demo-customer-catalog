import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerHttpService {
  
  constructor(private http: HttpClient) { }

  /**
   * Function api to get customer list
   * @param filter 
   */
  getCustomer (filter: {[key: string]: string}): Observable<any> {
    return this.http.get('/api/Customer/list', {params: filter});
  }

  /**
   * Function api to create customer list
   * @param data 
   */
  createCustomer (data): Observable<any> {
    return this.http.post('/api/Customer/create', data);
  }

  deleteCustomer (id: string): Observable<any> {
    return this.http.delete('/api/Customer/delete/' + id);
  }
}
