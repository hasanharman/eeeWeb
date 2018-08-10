import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
pass:string;
logged:boolean = true;
  constructor() { 
firebase.database().ref().once('value',data => {
this.pass=data.child('adminPass').val();
})
  }

  ngOnInit() {
  }
 login(password) {
   console.log(password);
   if(this.pass === password)
   alert('succesfull');
   this.logged = true;
 }
}
