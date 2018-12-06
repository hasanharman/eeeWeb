import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import * as $ from 'jquery';

@Component({
  selector: 'app-spotlightsdetail',
  templateUrl: './spotlightsdetail.component.html',
  styleUrls: ['./spotlightsdetail.component.css']
})
export class SpotlightsdetailComponent implements OnInit {
  allStuffs;
  name;
  surname;
  pp;
  email;
  h1;h2;h3;h4;h5;
  text1;text2;text3;text4;text5;
  text6;text7;text8;text9;text10;
  text11;text12;text13;text14;text15;
  year;
  title;

  constructor(private route: ActivatedRoute, afDB: AngularFireDatabase) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.allStuffs = afDB.list('tr/personels/spotlights').valueChanges().subscribe(data => {
        data.forEach((element: any) => {
          if (params['id'] == element.userId) {
            this.pp = element.pp;
            this.name = element.name;
            this.email = element.email;
            this.h1 = element.h1;
            this.h2 = element.h2;
            this.h3 = element.h3;
            this.h4 = element.h4;
            this.h5 = element.h5;
            this.text1 = element.text1;
            this.text2 = element.text2;
            this.text3 = element.text3;
            this.text4 = element.text4;
            this.text5 = element.text5;
            this.text6 = element.text6;
            this.text7 = element.text7;
            this.text8 = element.text8;
            this.text9 = element.text9;
            this.text10 = element.text10;
            this.text11 = element.text11;
            this.text12 = element.text12;
            this.text13 = element.text13;
            this.text14 = element.text14;
            this.text15 = element.text15;
            this.year = element.year;
            this.title = element.title;
            this.surname = element.surname;
          }
        });
      })
    });
  }
  ngOnInit() {
  }

}
