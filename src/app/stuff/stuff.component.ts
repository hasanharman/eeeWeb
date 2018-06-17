import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {
  stuffs;
  constructor(afDB: AngularFireDatabase) { 
    this.stuffs = afDB.list('stuffs').valueChanges();
    console.log(this.stuffs);
    
  }

  ngOnInit() {
    
  }

}
