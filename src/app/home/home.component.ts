import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news;
  constructor(afDB: AngularFireDatabase) { 
    this.news = afDB.list('news').valueChanges();

  }

  ngOnInit() {
  }

}
