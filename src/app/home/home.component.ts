import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news;  
  constructor(afDB: AngularFireDatabase,config: NgbCarouselConfig) { 
    this.news = afDB.list('news').valueChanges();
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = true;

  }

  ngOnInit() {
  }

}
