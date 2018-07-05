import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staffs;
  constructor(afDB: AngularFireDatabase) { 
    this.staffs = afDB.list('personels/staff').valueChanges();
  }

  ngOnInit() {
  }

}
