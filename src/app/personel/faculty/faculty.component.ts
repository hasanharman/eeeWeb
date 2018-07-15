import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  faculties;

  constructor(afDB: AngularFireDatabase) { 
  this.faculties = afDB.list('/tr/personels/faculty').valueChanges();
  }
  ngOnInit() {
  }

}
