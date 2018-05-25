import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { CookieService } from "ngx-cookie";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, CookieService]
})
export class LoginComponent implements OnInit {
  public isRememberMe: boolean;
  @ViewChild('loginForm') loginForm: FormGroup;
  constructor(private restService: LoginService, private cookieService: CookieService, private router: Router, private toastr: ToastrService) {
    let token = localStorage.getItem('token');
  }
  private serverResponse: any;
  ngOnInit() {
    this.buildLoginForm();
    this.getCookieData()
  }
  buildLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }
  getCookieData() {
    const data: any = this.cookieService.getObject('user');
    if (data !== null && data !== undefined) {
      this.loginForm.controls['email'].setValue(data.email);
      this.loginForm.controls['password'].setValue(data.password);
    }
  }
  onSubmit() {
    if (this.isRememberMe === true) {
      this.cookieService.putObject('user', this.loginForm.value);
    }
    console.log('login values ' + JSON.stringify(this.loginForm.value));
    //this.serverResponse = this.http.post('https://restaurantsass.herokuapp.com/auth/local', this.loginForm.value);
    this.restService.login(this.loginForm.value).subscribe((res: any) => {
      console.log('server response ' + JSON.stringify(res));
      let login_token = 'Bearer ' + res.token;
      localStorage.setItem('token', login_token);
      if (localStorage.getItem('token') === null) {
        this.toastr.warning('UnAuthorized user', 'Login')
      } else {
        this.toastr.success('Login Successful', 'successfull'),
          this.router.navigate(['dashboard'])
      }
    })
  }
  onForgotPassword() {
    this.router.navigate(['forget_password'])
  }
  Newregister() {
    this.router.navigate(['registration'])
  }
}
