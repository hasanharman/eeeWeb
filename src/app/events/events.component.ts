import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '../../../node_modules/ng2-translate';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events;
  title;
  text;
  starterLang = 'tr'
 

  constructor(afDB: AngularFireDatabase, translateService:TranslateService ) {
     
    console.log(translateService.currentLang );
    if(!translateService.currentLang)  this.starterLang = 'tr' ;
    else this.starterLang = translateService.currentLang;

    console.log(this.starterLang);
    
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.starterLang = event.lang;
      this.events = afDB.list(this.starterLang + '/home/events').valueChanges();
      
   })
   this.events = afDB.list(this.starterLang + '/home/events').valueChanges();
   
  };
  ngOnInit() {
  }

}