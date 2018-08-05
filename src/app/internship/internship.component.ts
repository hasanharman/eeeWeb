import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { TranslateService, LangChangeEvent } from '../../../node_modules/ng2-translate';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {
  starterLang = 'tr';
  courseList = false;
  collection;
  
  constructor(private afDB: AngularFireDatabase, translateService: TranslateService) { 
    if(!translateService.currentLang)  this.starterLang = 'tr' ;
    else this.starterLang = translateService.currentLang;
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.starterLang = event.lang;
      this.collection = afDB.list(this.starterLang + '/internship').valueChanges();
    });
    this.collection = afDB.list(this.starterLang + '/internship').valueChanges();

  }

  ngOnInit() {
  }

}
