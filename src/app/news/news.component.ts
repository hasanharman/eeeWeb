import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { TranslateService, LangChangeEvent } from '../../../node_modules/ng2-translate';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  starterLang = 'tr'
  routerDirective;
  title:string;
  text:string;
  photoUrl:string;
  subtitle:string;
  constructor(private route: ActivatedRoute,translateService:TranslateService ) {
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.starterLang = event.lang;
      
      firebase.database().ref().child(this.starterLang).child('home').child('news').child(this.routerDirective)
      .once('value',news => {
        console.log(news.val());
        
        this.title = news.child('newsDetail').child('title').val(); 
        this.text = news.child('newsDetail').child('text').val();
        this.photoUrl = news.child('newsDetail').child('photoUrl').val(); 
        this.subtitle = news.child('newsDetail').child('subtitle').val(); 
        console.log(this.title);
        
      })

    });

    this.route.params.subscribe(params => {
      this.routerDirective = params['newsId'];
      console.log(this.routerDirective);
      
      firebase.database().ref().child(this.starterLang).child('home').child('news').child(this.routerDirective)
      .once('value',news => {
        console.log(news.val());
        
        this.title = news.child('newsDetail').child('title').val(); 
        this.text = news.child('newsDetail').child('text').val();
        this.photoUrl = news.child('newsDetail').child('photoUrl').val(); 
        this.subtitle = news.child('newsDetail').child('subtitle').val(); 
        console.log(this.title);
        
      })
    });
   }

  ngOnInit() {
  }

}
