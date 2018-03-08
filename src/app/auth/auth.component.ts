import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '@services/auth/auth.service';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LogService} from '@services/log/log.service';
import {FirebaseError} from '@models/firebase-error';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public loading = false;
  public authForm: FormGroup;
  public error: FirebaseError;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
    ) {
  }

  ngOnInit() {

    this.authService.error.subscribe(error => {
      this.loading = false;
      this.error = error;
    });

    this.authService.auth.subscribe(auth => {
      this.loading = false;
      this.error = null;
    });

    this.authForm = this.fb.group({
      'email': this.fb.control('', [
        Validators.required,
        Validators.minLength(4),
        Validators.email
      ]),
      'password': this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ])
    });
  }

  public onSignInGoogle(form: NgForm): void {
    this.loading = true;
    this.authService.signInWithGoogle();
  }

  public onSignInTwitter(form: NgForm): void {
    this.loading = true;
    this.authService.signInWithTwitter();
  }

  public onSignInFacebook(form: NgForm): void {
    this.loading = true;
    this.authService.signInWithFacebook();
  }

  public onSignInGithub(form: NgForm): void {
    this.loading = true;
    this.authService.signInWithGithub();
  }

  public onSignin(): void {
    this.loading = true;
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    this.authService.signInUser(email, password);
  }

  onSigninAnonymous(form: NgForm) {
    this.loading = true;
    this.authService.signInAnonymous();
  }
}
