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
  allStuffs;
  name;
  pp;
  

  constructor(private route: ActivatedRoute, afDB: AngularFireDatabase) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.allStuffs = afDB.list('personels/spotlights').valueChanges().subscribe(data => {
        data.forEach((element: any) => {
          if (params['id'] == element.userId) {
            this.pp = element.pp;
            this.name = element.name;
          }
        });
      })
    });
  }

  ngOnInit() {
  }

}
