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
  facultynews;
  announcements;
  events;
  graduates;
  constructor(afDB: AngularFireDatabase,config: NgbCarouselConfig) { 
    this.news = afDB.list('home/news').valueChanges();
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = true;
    this.facultynews = afDB.list('home/facultynews').valueChanges();
    this.announcements = afDB.list('home/announcements').valueChanges();
    this.events = afDB.list('home/events').valueChanges();
    this.graduates = afDB.list('home/graduates').valueChanges();
    
  }
  ngOnInit() {
  }
}
