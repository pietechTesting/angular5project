import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service'
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  providers: [LoginService]
})
export class ForgetPasswordComponent implements OnInit {

  public isEmailVerified: boolean = false;
  public counter: any;  // counter to display otp expiration time
  public count: number = 300;   // contains otp expiration time in seconds
  @ViewChild('forgetPassword') forgetPassword: FormGroup;
  @ViewChild('otp') otp: FormGroup;
  constructor(private router: Router, private restService: LoginService) { }

  ngOnInit() {
    this.buildForgetPasswordForm();

  }
  buildForgetPasswordForm() {
    this.forgetPassword = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }
  buildOtpForm() {
    this.otp = new FormGroup({
      otp: new FormControl(null, [Validators.required, Validators.pattern('/^\d+$/')])
    })
  }
  onLogin() {
    this.router.navigate(['']);
  }
  forgotPassword() {
    this.restService.forgetPassword(this.forgetPassword.value).subscribe((res: any) => {
      console.log('server response ' + JSON.stringify(res));
      localStorage.setItem('emailToken', 'bearer ' + res.token);
      this.isEmailVerified = true;
    })
  }
  varifyOtp() {
    this.restService.otpVarify(this.otp.value).subscribe((rest: any) => {
      console.log('server response ' + JSON.stringify(rest));
    })
  }
  public reset() {
    this.isEmailVerified = false;
    this.count = 300;
    localStorage.clear();
  }
}
