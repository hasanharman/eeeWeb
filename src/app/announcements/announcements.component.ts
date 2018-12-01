import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { TranslateService, LangChangeEvent } from '../../../node_modules/ng2-translate';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  starterLang = 'tr';
  announcements;

  constructor(private afDB: AngularFireDatabase, translateService: TranslateService) {
    if(!translateService.currentLang)  this.starterLang = 'tr' ;
    else this.starterLang = translateService.currentLang;
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.starterLang = event.lang;
      this.announcements = this.afDB.list(this.starterLang + '/announcements').valueChanges();

    });
  }

  ngOnInit() {
    this.announcements = this.afDB.list(this.starterLang + '/announcements').valueChanges();
   
  }


  convertText(text,i){
    console.log({text});
    $(".imgText").eq(i).empty()

    do {
          $(".imgText").eq(i).append(text)

    } while( false)
    return ''
 
  }

}
