import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import * as $ from 'jquery';

@Component({
  selector: 'app-spotlights',
  templateUrl: './spotlights.component.html',
  styleUrls: ['./spotlights.component.css']
})
export class SpotlightsComponent implements OnInit {
spotlights;
starterLang = 'tr'

  constructor(afDB: AngularFireDatabase) {
    this.spotlights = afDB.list('tr/personels/spotlights').valueChanges();
  }

  ngOnInit() {
  }

}
