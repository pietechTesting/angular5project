import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { LoginService } from '../login/login.service'

let password = new FormControl('', Validators.required);
let Confirmpassword = new FormControl('', CustomValidators.equalTo(password));
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [LoginService]
})
export class RegisterComponent implements OnInit {

  @ViewChild('registration') registration: FormGroup;


  constructor(private restSErvice: LoginService) {

  }

  ngOnInit() {
    this.buildResigtrationForm()
  }
  buildResigtrationForm() {
    this.registration = new FormGroup({
      resName: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: password,
      Confirmpassword: Confirmpassword
    })
  }
  registrationForm() {
    const body = {
      email: this.registration.value.email,
      password: this.registration.value.password
    }
    this.restSErvice.registration(body).subscribe((res: any) => {
      console.log('server response' + JSON.stringify(res))
    })
  }
}
