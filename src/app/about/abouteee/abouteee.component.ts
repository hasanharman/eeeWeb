import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { TranslateService, LangChangeEvent } from '../../../../node_modules/ng2-translate';

@Component({
  selector: 'app-abouteee',
  templateUrl: './abouteee.component.html',
  styleUrls: ['./abouteee.component.css']
})
export class AbouteeeComponent implements OnInit {
  title;
  text;
  starterLang = 'tr'

  constructor(afDB: AngularFireDatabase, translateService: TranslateService) { 
    let eventRef = firebase.database().ref().child('navbar').child('abouteee');
    eventRef.once('value', data => {
      this.text = data.child('text').val();
      this.title = data.child('title').val();
    })
  }

  ngOnInit() {
  }

}
