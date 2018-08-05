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
headTitle;
vice1name;vice1surname;vice1pp;vice1Title;
vice2name;vice2surname;vice2pp;vice2Title;

 constructor(afDB: AngularFireDatabase) { 


  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.headName = faculty.child('person1').child('name').val();
  })
  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.headSurname = faculty.child('person1').child('surname').val();
  })
  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.headpp = faculty.child('person1').child('pp').val();
  })
  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.headTitle = faculty.child('person1').child('title').val();
  })
  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.vice1name = faculty.child('person25').child('name').val();
  })

  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.vice1surname = faculty.child('person25').child('surname').val();
  })

  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.vice1pp = faculty.child('person25').child('pp').val();    
  })
  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.vice1Title = faculty.child('person25').child('title').val();    
  })
  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.vice2name = faculty.child('person29').child('name').val();
  })

  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.vice2surname = faculty.child('person29').child('surname').val();
  })

  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.vice2pp = faculty.child('person29').child('pp').val();    
  })
  firebase.database().ref().child(this.starterLang).child('personels').child('faculty').once('value', faculty=> {
    this.vice2Title = faculty.child('person29').child('title').val();    
  })
  }
  
  ngOnInit() {

  }

}
