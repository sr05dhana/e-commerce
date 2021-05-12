import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  checkLogin() {
    this.loginService.getUserDetail(this.userName).subscribe(resp => {
      if (resp.password === this.password) {
        this.router.navigateByUrl('/course-detail', { state: resp });
      } else {
        window.alert('Login Failed');
      }
    }, err => {
      window.alert('Login Failed');
    });
  }  
}
