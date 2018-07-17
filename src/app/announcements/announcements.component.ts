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

  constructor(afDB: AngularFireDatabase,translateService: TranslateService) { 
    this.announcements = afDB.list(this.starterLang + '/home/announcements').valueChanges();
  }

  ngOnInit() {
  }

}
