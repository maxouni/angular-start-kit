import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "@services/auth/auth.service";
import {AlertService} from "@services/alert/alert.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  @Input() loading = false;

  constructor(
    private authService: AuthService,
    private alertService: AlertService) {
  }

  ngOnInit() {

  }

  public onSignInGoogle(form: NgForm): void {
    this.loading = true;
    this.authService.signInWithGoogle();
  }

  onSignInTwitter(form: NgForm) {
    this.loading = true;
    this.authService.signInWithTwitter();
  }

  onSignInFacebook(form: NgForm) {
    this.loading = true;
    this.authService.signInWithFacebook();
  }

  onSignInGithub(form: NgForm) {
    this.loading = true;
    this.authService.signInWithGithub();
  }

  onSignin(form: NgForm) {
    this.loading = true;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

  onSigninAnonymous(form: NgForm) {
    this.loading = true;
    this.authService.signInAnonymous();
  }
}
