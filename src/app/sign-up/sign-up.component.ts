import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userName: string = '';
  password: string = '';
  role: string = '';
  constructor(private signUpService: SignUpService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    if (!!this.userName && !!this.password && !!this.role) {
      this.signUpService.createUser({ password: this.password, role: this.role, username: this.userName }).subscribe(resp => {
        window.alert(resp);
        this.router.navigate(['']);
      }, err => {
        window.alert('User Already Exists');
      });
    }
  }
}
