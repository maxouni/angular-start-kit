import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirebaseError} from '../core/models/firebase-error';
import {AuthService} from '../core/services/auth/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public loading = false;
  public forgotForm: FormGroup;
  public error: FirebaseError;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {

    this.forgotForm = this.fb.group({
      'email': this.fb.control('', [
        Validators.required,
        Validators.minLength(4),
        Validators.email
      ])
    });
  }

}
