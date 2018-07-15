import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { TranslateService, LangChangeEvent } from '../../../node_modules/ng2-translate';

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
  annoText; annoText2; annoText3;
  spotlights;

  starterLang = 'tr'

  constructor(afDB: AngularFireDatabase, config: NgbCarouselConfig, translateService: TranslateService) {
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.starterLang = event.lang;
      this.news = afDB.list(this.starterLang + '/home/news').valueChanges();
    })

    this.news = afDB.list(this.starterLang + '/home/news').valueChanges();
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = true;

    this.spotlights = afDB.list('personels/spotlights').valueChanges();

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
