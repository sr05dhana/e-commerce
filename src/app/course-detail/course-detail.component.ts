import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDetailService } from './course-detail.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  userDetails: any;
  userCourses: any;
  allCourses = [];
  isEnrolled = true;
  courseName: string = '';
  constructor(private courseDetailService: CourseDetailService, private router: Router) { }

  ngOnInit(): void {
    this.userDetails = window.history.state;
    if (!!this.userDetails.username) {
      this.courseDetailService.getUserCourseDetail(this.userDetails.username).subscribe(resp => {
        this.userCourses = resp;
        this.courseDetailService.getAllCourseDetail().subscribe(resp => {
          const courses = resp.courses;
          this.courseName = courses.find((c: any) => c.courseid === this.userCourses.courseid).coursename;
        });
      });
      if (this.userDetails.role === 'instructor') {
        this.courseDetailService.getAllCourseDetail().subscribe(resp => {
          this.allCourses = resp.courses;
        });
      }
    } else {
      this.router.navigate(['']);
    }
  }
}
