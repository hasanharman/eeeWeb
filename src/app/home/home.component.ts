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
  newsRegular;
  events;
  announcements;
  spotlights;

  starterLang = 'tr'

  constructor(afDB: AngularFireDatabase, config: NgbCarouselConfig, translateService: TranslateService) {
    if(!translateService.currentLang)  this.starterLang = 'tr' ;
    else this.starterLang = translateService.currentLang;
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.starterLang = event.lang;
      this.news = afDB.list(this.starterLang + '/home/news').valueChanges();
      this.newsRegular = afDB.list(this.starterLang + '/home/newsRegular').valueChanges();
      this.announcements = afDB.list(this.starterLang + '/announcements').valueChanges();
      this.events = afDB.list(this.starterLang + '/home/events').valueChanges();

      this.spotlights = afDB.list(this.starterLang + '/personels/spotlights').valueChanges().subscribe(data => {
        let randomNumber = Math.floor(Math.random() * data.length)
        console.warn(data[randomNumber]);

        this.spotlights = data[randomNumber];
      });

    })

    this.news = afDB.list(this.starterLang + '/home/news').valueChanges();
    this.newsRegular = afDB.list(this.starterLang + '/home/newsRegular').valueChanges();
    this.announcements = afDB.list(this.starterLang + '/announcements').valueChanges();
    this.events = afDB.list(this.starterLang + '/home/events').valueChanges();

    config.interval = 4000;
    config.wrap = true;
    config.keyboard = true;

    afDB.list(this.starterLang + '/personels/spotlights').valueChanges().subscribe(data => {
      console.log(data);
      let randomNumber = Math.floor(Math.random() * data.length)
      console.warn(data[randomNumber]);

      this.spotlights = data[randomNumber];
    })
    

  

    

   
    
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.carousel-indicators').css({top:'2vh',height:'1vh'})
    });
  }

 /*  copy() {
    firebase.database().ref().child('tr').child('home').child('news').once('value', data => {
      const myData = data.val();
      firebase.database().ref().child('tr').child('home').child('newsRegular').update(myData)

    })
  } */
}
