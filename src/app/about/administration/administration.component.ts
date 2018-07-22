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
headpp;
headSurname; 
headName;
 constructor(afDB: AngularFireDatabase) { 


  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.headName = faculty.child('person24').child('name').val();
    console.log(this.headName);  
  })

  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.headSurname = faculty.child('person24').child('surname').val();
    console.log(this.headSurname);  
  })

  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.headpp = faculty.child('person24').child('pp').val();
    console.log(this.headpp);
    
  })
  }
  
  ngOnInit() {

  }

}
