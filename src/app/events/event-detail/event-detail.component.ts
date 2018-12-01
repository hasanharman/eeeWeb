import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { TranslateService, LangChangeEvent } from '../../../../node_modules/ng2-translate';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  starterLang = 'tr'
  routerDirective;
  title: string;
  text1: string;

  pp1: string;
  pp2: string;
  pp3: string;
  pp4: string;
  pp5: string;
  date: string;
  topic: string;
  venue: string;
  speaker: string;

  constructor(private route: ActivatedRoute, translateService: TranslateService) {
    if (!translateService.currentLang) this.starterLang = 'tr';
    else this.starterLang = translateService.currentLang;
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {

      console.log(event.lang);
      this.starterLang = event.lang;
      $(".textAreas").empty();

      firebase.database().ref().child(this.starterLang).child('home').child('events').child(this.routerDirective).child('eventDetail')
        .once('value', events => {

          this.title = events.child('title').val();
          this.pp1 = events.child('pp1').val();
          this.pp2 = events.child('pp2').val();
          this.pp3 = events.child('pp3').val();
          this.pp4 = events.child('pp4').val();
          this.pp5 = events.child('pp5').val();
          this.date = events.child('date').val();

          $(".textAreas").append(events.child('text1').val())

        })

    });

    this.route.params.subscribe(params => {
      this.routerDirective = params['Id'];
      console.log(this.routerDirective);
      $(".textAreas").empty();
      firebase.database().ref().child(this.starterLang).child('home').child('events').child(this.routerDirective).child('eventDetail')
        .once('value', events => {

          this.title = events.child('title').val();
          this.pp1 = events.child('pp1').val();
          this.pp2 = events.child('pp2').val();
          this.pp3 = events.child('pp3').val();
          this.pp4 = events.child('pp4').val();
          this.pp5 = events.child('pp5').val(); this.date = events.child('date').val();

          $(".textAreas").append(events.child('text1').val())


        })
    });
  }

  ngOnInit() {
  }

}
