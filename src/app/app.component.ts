import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCbYBd3Gu_fExn3_buzlP_Q4Yxu8U8Tz7U",
      authDomain: "madbrothers-auth.firebaseapp.com",
      databaseURL: "https://madbrothers-auth.firebaseio.com",
      projectId: "madbrothers-auth",
      storageBucket: "madbrothers-auth.appspot.com",
      messagingSenderId: "574391449346"
    });

    // See users, messages and keep in touch in console log
    const preUsers = document.getElementById('users')
    const dbRefUsers = firebase.database().ref().child('users');
    dbRefUsers.on('value', snap => console.log(snap.val()));

    const preMessages = document.getElementById('messages')
    const dbRefMessages = firebase.database().ref().child('messages');
    dbRefMessages.on('value', snap => console.log(snap.val()));

    const preTouch = document.getElementById('touch')
    const dbRefTouch = firebase.database().ref().child('touch');
    dbRefTouch.on('value', snap => console.log(snap.val()));
  }
}
