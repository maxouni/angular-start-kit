import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '@services/auth/auth.service';
import {AlertService} from '@services/alert/alert.service';
import {NgForm} from '@angular/forms';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LogService} from '@services/log/log.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  @Input() loading = false;
  public authForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private log: LogService,
    private alertService: AlertService) {
  }

  ngOnInit() {
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
    this.authService.signinUser(email, password);
  }

  onSigninAnonymous(form: NgForm) {
    this.loading = true;
    this.authService.signInAnonymous();
  }
}
