import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantService } from '../../services/constant.service';
@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private constService: ConstantService) { }
  login(loginInfo) {
    return this.http.post(this.constService.LOGIN_AUTH + 'auth/local', loginInfo);
  }
  forgetPassword(data: any) {
    return this.http.post(this.constService.API_ENDPOINT + 'users/password/otp', data)
  }
  otpVarify(otp: any) {
    return this.http.post(this.constService.API_ENDPOINT + 'users/password/verification', otp, {
    });
  }
  registration(register: any) {
    const body = JSON.stringify(register);
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.constService.API_ENDPOINT + 'users/', body)
  }
}
