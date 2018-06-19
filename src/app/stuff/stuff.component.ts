import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {
  faculties;
  asistants;
  staffs;
  constructor(afDB: AngularFireDatabase) { 
    this.faculties = afDB.list('personels/faculty').valueChanges();
    this.asistants = afDB.list('personels/asistants').valueChanges();
    this.staffs = afDB.list('personels/staff').valueChanges();

  }

  ngOnInit() {
    
  }
//   addToFirebase () {
//     let name = $('.nameF').val();
//     let username = $('.usernameF').val( );
//     let surname = $('.surnameF').val();
//     let pp = $('.ppF').val();
  
//     firebase.database().ref().child('personels').child('asistants').child(username.toString()).update({
//       name : name,
//       surname:surname,
//       pp:pp,
//     }) 
// }

}
