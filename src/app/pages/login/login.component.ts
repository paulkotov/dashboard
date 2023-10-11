import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/AuthService/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUserData = {
    login: '',
    password: ''
  };

  get areFieldsEmpty() {
    return this.loginUserData.login === '' && this.loginUserData.password === '';
  }

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    // TODO uncomment next lines after service implemenration
    this.authService.loginUser(this.loginUserData)
    .subscribe((response: any) => {
        localStorage.setItem('token', response);
        this.router.navigateByUrl('/calendar');
      },
      err => console.log(err)
    );
  }

}
