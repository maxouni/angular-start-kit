import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { AlertService } from '@services/alert/alert.service';
import { UserService } from '@services/user/user.service';
import {LogService} from '@services/log/log.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {filter} from 'rxjs/operators';
import {FirebaseError} from '@models/firebase-error';

@Injectable()
export class AuthService {
  token: string;

  private auth$ = new BehaviorSubject<boolean>(null);
  private error$ = new BehaviorSubject<FirebaseError>(null);

  constructor(
    private router: Router,
    private alertService: AlertService,
    private log: LogService,
    private userService: UserService) { }

  // Signup/register
  signUpWithGoogle() {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(providerGoogle)
      .then((result) => {
        const token = result.credential.accessToken;
        const currentUser = result.user;
      })
      .then(response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
          this.alertService.showToaster('Verification email is sent to you.');
          this.userService.verificationUserEmail();
          this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, firebase.auth().currentUser.email);
      }).catch(
        error => console.log(error)
      );
  }

  signUpWithTwitter() {
    const providerTwitter = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(providerTwitter)
      .then((result) => {
        const token = result.credential.accessToken;
        const currentUser = result.user;
        const secret = result.credential.secret;
      })
      .then(response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
          this.alertService.showToaster('Verification email is sent to you.');
          this.userService.verificationUserEmail();
          this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, firebase.auth().currentUser.email);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signUpWithFacebook() {
    const providerFacebook = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(providerFacebook)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
          this.alertService.showToaster('Verification email is sent to you.');
          this.userService.verificationUserEmail();
          this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, firebase.auth().currentUser.email);
        }
      )
      .catch((error) => {
        this.alertService.showToaster(error);
      });
  }

  signUpWithGithub() {
    const providerGithub = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(providerGithub)
      .then((result) => {
        const token = result.credential.accessToken;
        const currentUser = result.user;
        this.alertService.showToaster('Verification email is sent to you.');
        this.userService.verificationUserEmail();
        this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, firebase.auth().currentUser.email);
      })
      .then(response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
          this.alertService.showToaster('Verification email is sent to you.');
          this.userService.verificationUserEmail();
          this.userService.saveUserInfo(firebase.auth().currentUser.uid, name, email);
        }
      ).catch(
      error => console.log(error)
    );
  }

  // Signin/login
  signInWithGoogle() {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(providerGoogle)
      .then((result) => {
        const token = result.credential.accessToken;
        const currentUser = result.user;
      })
      .then(response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
          this.alertService.showToaster('Google login succesful');
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signInWithTwitter() {
    const providerTwitter = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(providerTwitter)
      .then(response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
          this.alertService.showToaster('Twitter login succesful');
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signInWithFacebook() {
    const providerFacebook = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(providerFacebook)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
          this.alertService.showToaster('Facebook login succesful');
        }
      )
      .catch((error) => {
        this.alertService.showToaster(error);
      });
  }

  signInWithGithub() {
    const providerGithub = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(providerGithub)
      .then((result) => {
        const token = result.credential.accessToken;
        const currentUser = result.user;
      })
      .then(response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
          this.alertService.showToaster('Github login succesful');
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  public signInUser(email: string, password: string) {
     firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
          this.auth$.next(true);
          this.log.green('Login successful');
        }
      )
      .catch(
        error => {
          this.error$.next(error);
          this.log.red(error.message);
        }
      );
  }

  signInAnonymous() {
    firebase.auth().signInAnonymously()
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().onAuthStateChanged(currentUser => {
            const isAnonymous = currentUser.isAnonymous;
            const uid = currentUser.uid;
            firebase.auth().currentUser.getIdToken()
              .then(
                (token: string) => this.token = token
              ),
              this.alertService.showToaster('Anonymous login successful');
              console.log(currentUser);
          });
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  // Other
  logout() {
    firebase.auth().signOut()
      .then(
        response => {
          this.router.navigate(['/home']);
        }
      )
      .catch(
        error => console.log(error)
      );
    this.token = null;
  }

  getIdToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  public get auth(): Observable<boolean> {
    return this.auth$.asObservable().pipe(filter(result => !!result));
  }

  public get error(): Observable<FirebaseError> {
    return this.error$.asObservable().pipe(filter(result => !!result));
  }
}
