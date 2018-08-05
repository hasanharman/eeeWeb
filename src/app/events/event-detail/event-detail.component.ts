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

  constructor(private route: ActivatedRoute,translateService:TranslateService ) {
    if(!translateService.currentLang)  this.starterLang = 'tr' ;
    else this.starterLang = translateService.currentLang;
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      
      console.log(event.lang);
      this.starterLang = event.lang;
      
      firebase.database().ref().child(this.starterLang).child('home').child('events').child('eventDetail').child(this.routerDirective)
      .once('value',news => {
        
        this.title = news.child('eventDetail').child('title').val(); 
        this.text1 = news.child('eventDetail').child('text1').val();
        this.text2 = news.child('eventDetail').child('text1').val();
        this.text3 = news.child('eventDetail').child('text1').val();
        this.pp = news.child('eventDetail').child('pp').val(); 
        this.date = news.child('eventDetail').child('date').val(); 
        
      })

    });

    this.route.params.subscribe(params => {
      this.routerDirective = params['newsId'];
      console.log(this.routerDirective);
      
      firebase.database().ref().child(this.starterLang).child('home').child('newsRegular').child(this.routerDirective)
      .once('value',news => {
        
        this.title = news.child('eventDetail').child('title').val(); 
        this.text1 = news.child('eventDetail').child('text1').val();
        this.text2 = news.child('eventDetail').child('text1').val();
        this.text3 = news.child('eventDetail').child('text1').val();
        this.pp = news.child('eventDetail').child('pp').val(); 
        this.date = news.child('eventDetail').child('date').val(); 
        
      })
    });
   }

  ngOnInit() {
  }

}
