import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {

  URL = 'http://18.133.180.192:5000';
  constructor(private http: HttpClient) { }

  getUserCourseDetail(userName: string): Observable<any> {
    return this.http.get(<any>this.URL + '/enrollments/' + userName);
  }

  getAllCourseDetail(): Observable<any> {
    return this.http.get(<any>this.URL + '/courses');
  }
}
