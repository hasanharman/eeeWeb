import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
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
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.starterLang = event.lang;
      this.announcements = this.afDB.list(this.starterLang + '/announcements').valueChanges();

    });
  }

  ngOnInit() {
    this.announcements = this.afDB.list(this.starterLang + '/announcements').valueChanges();
   
  }


 

}
