import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin = true;
  form: FormGroup  = this.formBuilder.group({
    username: ['', [validateUsername]]
  }) ;

  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {}
}

function validateUsername(control:AbstractControl) {
  if(!control.value || typeof control.value === 'string' && !control.value.trim()) {
    return {
      Required: true,
      message: 'username is required'
    }
  }
  return null;
}
