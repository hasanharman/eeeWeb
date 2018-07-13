import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news;
  eventText;
  eventTitle;
  facultyText;
  annoText;annoText2;annoText3;
 
  constructor(afDB: AngularFireDatabase,config: NgbCarouselConfig) { 
    this.news = afDB.list('home/news').valueChanges();
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = true;
    
    let eventRef = firebase.database().ref().child('home').child('events');
    eventRef.once('value', data => {
      this.eventText = data.child('eventText').val();
      this.eventTitle = data.child('eventTitle').val();
    })

    let announcementsRef = firebase.database().ref().child('home').child('announcements');
    announcementsRef.once('value', data => {
      this.annoText = data.child('annoText').val();
    })

    announcementsRef.child('home').child('announcements');
    announcementsRef.once('value', data => {
      this.annoText2 = data.child('annoText2').val();
    })
    announcementsRef.child('home').child('announcements');
    announcementsRef.once('value', data => {
      this.annoText2 = data.child('annoText2').val();
    })
    announcementsRef.child('home').child('announcements');
    announcementsRef.once('value', data => {
      this.annoText3 = data.child('annoText3').val();
    })
  }

  ngOnInit() {
  }
}
