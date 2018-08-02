import { TranslateService, LangChangeEvent } from 'ng2-translate';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graduate',
  templateUrl: './graduate.component.html',
  styleUrls: ['./graduate.component.css']
})
export class GraduateComponent implements OnInit {
  starterLang = 'tr';
  collection;
  constructor(private afDB: AngularFireDatabase, translateService: TranslateService) { 
    if(!translateService.currentLang)  this.starterLang = 'tr' ;
    else this.starterLang = translateService.currentLang;
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.starterLang = event.lang;
      this.collection = afDB.list(this.starterLang + '/education/graduate').valueChanges();
    });
    this.collection = afDB.list(this.starterLang + '/education/graduate').valueChanges();

  }

  ngOnInit() {
  }
}
