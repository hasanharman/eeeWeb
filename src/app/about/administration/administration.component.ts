import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
head;
vice1;
vice2;
  constructor(afDB: AngularFireDatabase) { 
  this.head = afDB.list('/tr/personels/faculty/person1').valueChanges();
  this.vice1 = afDB.list('/tr/personels/faculty').valueChanges();

  }
  ngOnInit() {

  }

}
