import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  URL = 'http://18.133.180.192:5000';
  constructor(private http: HttpClient) { }

  createUser(userDetails: any): Observable<any> {
    return this.http.post(<any>this.URL + '/createuser', userDetails);
  }
}
