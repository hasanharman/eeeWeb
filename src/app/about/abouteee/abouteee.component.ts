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
  ppAylin;
  ppMuh;
  starterLang = 'tr'

  constructor(afDB: AngularFireDatabase, translateService: TranslateService) {

    firebase.database().ref().child(this.starterLang).child('personels').child('spotlights').once('value', spotlights=> {
      this.ppAylin = spotlights.child('mezun2').child('pp').val();
    })

    firebase.database().ref().child(this.starterLang).child('personels').child('spotlights').once('value', spotlights=> {
      this.ppMuh = spotlights.child('mezun3').child('pp').val();
    })
     
  }

  ngOnInit() {
  }

}
