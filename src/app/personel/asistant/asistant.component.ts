import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-asistant',
  templateUrl: './asistant.component.html',
  styleUrls: ['./asistant.component.css']
})
export class AsistantComponent implements OnInit {
  asistants;
  constructor(afDB: AngularFireDatabase) {
    this.asistants = afDB.list('personels/asistants').valueChanges();
   }
  ngOnInit() {
  }

}
