import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '../../../node_modules/ng2-translate';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news;
  title;
  text;
  starterLang = 'tr'
 

  constructor(private afDB: AngularFireDatabase, translateService:TranslateService ) {
     
    console.log(translateService.currentLang );
    if(!translateService.currentLang)  this.starterLang = 'tr' ;
    else this.starterLang = translateService.currentLang;

    console.log(this.starterLang);
    
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.starterLang = event.lang;
      this.news = afDB.list(this.starterLang + '/home/newsRegular', ref => ref.orderByChild("time")).valueChanges().map((array) => array.reverse());
      this.afDB.list(this.starterLang + '/home/newsRegular', ref => ref.orderByChild("time")).valueChanges().map((array) => array.reverse()); 
      
   })
   this.news = afDB.list(this.starterLang + '/home/newsRegular', ref => ref.orderByChild("time")).valueChanges().map((array) => array.reverse());
   
  };
  ngOnInit() {
 
  }

}
