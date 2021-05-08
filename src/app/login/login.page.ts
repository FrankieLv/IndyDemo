import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  login: any = { username: '', password: '' };
  submitted = false;

  constructor(public router: Router) { }
  
  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.router.navigateByUrl('/app/tabs/dashboard');
    }
  }

}
