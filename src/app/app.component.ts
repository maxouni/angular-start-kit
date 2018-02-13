import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {environment} from '@environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp(
      environment.firebase
    );

    // See users, messages and keep in touch in console log
    const preUsers = document.getElementById('users');
    const dbRefUsers = firebase.database().ref().child('users');
    dbRefUsers.on('value', snap => console.log(snap.val()));

    const preMessages = document.getElementById('messages');
    const dbRefMessages = firebase.database().ref().child('messages');
    dbRefMessages.on('value', snap => console.log(snap.val()));

    const preTouch = document.getElementById('touch');
    const dbRefTouch = firebase.database().ref().child('touch');
    dbRefTouch.on('value', snap => console.log(snap.val()));
  }
}
