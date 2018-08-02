import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { TranslateService, LangChangeEvent } from '../../../../node_modules/ng2-translate';

@Component({
  selector: 'app-undergraduate',
  templateUrl: './undergraduate.component.html',
  styleUrls: ['./undergraduate.component.css']
})
export class UndergraduateComponent implements OnInit {
  starterLang = 'tr';

  constructor(private afDB: AngularFireDatabase, translateService: TranslateService) { 
    if(!translateService.currentLang)  this.starterLang = 'tr' ;
    else this.starterLang = translateService.currentLang;
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.starterLang = event.lang;

    });

  }

  ngOnInit() {
  }

}
