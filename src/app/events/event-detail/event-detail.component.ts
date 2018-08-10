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
  title:string;
  text1:string;
  text2:string;
  text3:string;
  pp:string;
  date:string;
  topic:string;
  venue:string;
  speaker:string;

  constructor(private route: ActivatedRoute,translateService:TranslateService ) {
    if(!translateService.currentLang)  this.starterLang = 'tr' ;
    else this.starterLang = translateService.currentLang;
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      
      console.log(event.lang);
      this.starterLang = event.lang;
      
      firebase.database().ref().child(this.starterLang).child('home').child('events').child(this.routerDirective).child('eventDetail')
      .once('value',events => {
        
        this.title = events .child('title').val(); 
        this.text1 = events.child('text1').val();
        this.text2 = events.child('text1').val();
        this.text3 = events .child('text1').val();
        this.pp = events.child('pp').val(); 
        this.date = events.child('date').val(); 
        this.topic = events.child('topic').val(); 
        this.venue = events.child('venue').val(); 
        this.speaker = events.child('speaker').val(); 
        
      })

    });

    this.route.params.subscribe(params => {
      this.routerDirective = params['Id'];
      console.log(this.routerDirective);
      
      firebase.database().ref().child(this.starterLang).child('home').child('events').child(this.routerDirective).child('eventDetail')
      .once('value',events => {
        
        this.title = events.child('title').val(); 
        this.text1 = events.child('text1').val();
        this.text2 = events.child('text1').val();
        this.text3 = events.child('text1').val();
        this.pp = events.child('pp').val(); 
        this.date = events.child('date').val(); 
        
      })
    });
   }

  ngOnInit() {
  }

}
