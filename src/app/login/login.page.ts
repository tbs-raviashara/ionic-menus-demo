import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      user: new FormControl('', Validators.compose([
        Validators.required
      ])),
      pass: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
  }
}
