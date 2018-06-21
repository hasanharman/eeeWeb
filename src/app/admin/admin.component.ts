import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addToAnnouncements() {
    let annoText = $('.annoTextF').val();
  
    firebase.database().ref().child('home').child('announcements').update({
      annoText: annoText,
    })
  }
  addToFacultyNews() {
    let facultyText = $('.facultyTextF').val();
  
    firebase.database().ref().child('home').child('facultynews').update({
      facultyText: facultyText,
    })
  }
  addToEvents() {
    let eventTitle = $('.eventTitleF').val();
    let eventText = $('.eventTextF').val();
  
    firebase.database().ref().child('home').child('events').update({
      eventTitle: eventTitle,
      eventText: eventText,
    })
  }
  addToNews() {
    let newsnumber = $('.newsnumberF').val();
    let newsTitle = $('.newsTitleF').val();
    let newsText = $('.newsTextF').val();
    let newsPhoto = $('.newsPhotoF').val();

    firebase.database().ref().child('home').child('news').child(newsnumber.toString()).update({
      newsnumber: newsnumber,
      newsTitle: newsTitle,
      newsText: newsText,
      newsPhoto: newsPhoto,
    })
  }
  addToFaculty() {
    let name = $('.nameF').val();
    let username = $('.usernameF').val();
    let surname = $('.surnameF').val();
    let pp = $('.ppF').val();

    firebase.database().ref().child('personels').child('faculty').child(username.toString()).update({
      name: name,
      surname: surname,
      pp: pp,
    })
  }

  removeToFaculty() {
    let name = $('.nameF').val();
    let username = $('.usernameF').val();
    let surname = $('.surnameF').val();
    let pp = $('.ppF').val();

    firebase.database().ref().child('personels').child('faculty').child(username.toString()).remove()
  }

  addToAsistant() {
    let name = $('.nameF').val();
    let username = $('.usernameF').val();
    let surname = $('.surnameF').val();
    let pp = $('.ppF').val();

    firebase.database().ref().child('personels').child('asistants').child(username.toString()).update({
      name: name,
      surname: surname,
      pp: pp,
    })
  }

  removeToAsistant() {
    let name = $('.nameF').val();
    let username = $('.usernameF').val();
    let surname = $('.surnameF').val();
    let pp = $('.ppF').val();

    firebase.database().ref().child('personels').child('asistants').child(username.toString()).remove()
  }
  addToStaff() {
    let name = $('.nameF').val();
    let username = $('.usernameF').val();
    let surname = $('.surnameF').val();
    let pp = $('.ppF').val();

    firebase.database().ref().child('personels').child('staff').child(username.toString()).update({
      name: name,
      surname: surname,
      pp: pp,
    })
  }

  removeToStaff() {
    let name = $('.nameF').val();
    let username = $('.usernameF').val();
    let surname = $('.surnameF').val();
    let pp = $('.ppF').val();

    firebase.database().ref().child('personels').child('staff').child(username.toString()).remove()
  }
}