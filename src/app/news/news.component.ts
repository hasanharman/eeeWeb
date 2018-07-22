import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { TranslateService, LangChangeEvent } from '../../../node_modules/ng2-translate';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news;
  starterLang = 'tr'
 
  constructor(afDB: AngularFireDatabase, translateService:TranslateService ) {
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.starterLang = event.lang;
      this.news = afDB.list(this.starterLang + '/home/newsRegular').valueChanges();
      
   })
   this.news = afDB.list(this.starterLang + '/home/newsRegular').valueChanges();

  };

  ngOnInit() {
  }

}
