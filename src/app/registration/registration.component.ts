import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirebaseError} from '@models/firebase-error';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public loading = false;
  public registerForm: FormGroup;
  public error: FirebaseError;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {

    this.registerForm = this.fb.group({
      'email': this.fb.control('', [
        Validators.required,
        Validators.minLength(4),
        Validators.email
      ]),
      'password': this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      'password_confirm': this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ])
    }, {validator: this.passwordConfirming});
  }

  private passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('password_confirm').value) {
      return {invalid: true};
    }
  }

  get email(): any {
    return this.registerForm.get('email');
  }

  get password(): any {
    return this.registerForm.get('password');
  }

  get password_confirm(): any {
    return this.registerForm.get('password_confirm');
  }


}
