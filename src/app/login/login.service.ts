import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL = 'http://18.133.180.192:5000';
  constructor(private http: HttpClient) { }

  getUserDetail(userName: string): Observable<any> {
    return this.http.get(<any>this.URL + '/users/' + userName);
  }
}
