import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
starterLang = 'tr'

  constructor(afDB: AngularFireDatabase) { 

  let headName;
  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    headName = faculty.child('person24').child('name').val();
    console.log(headName);  
  })

  let headSurname;
  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    headSurname = faculty.child('person24').child('surname').val();
    console.log(headSurname);  
  })

  let headpp;
  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    headpp = faculty.child('person24').child('pp').val();
  })
  }
  
  ngOnInit() {

  }

}
