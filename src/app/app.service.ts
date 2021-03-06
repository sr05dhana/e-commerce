import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from './common-variables';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(<any>apiUrl + '/api/products');
  }

  getSetProducts(page: number, limit: number, sort: string): Observable<any> {
    return this.http.get(<any>apiUrl + '/api/products?_page=' + page + '&_limit=' + limit + '&_sort=' + sort);
  }
}
