import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { TranslateService, LangChangeEvent } from '../../../node_modules/ng2-translate';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  starterLang = 'tr';
  projects;
  owner;

  constructor(afDB: AngularFireDatabase,translateService: TranslateService) { 
    this.projects = afDB.list(this.starterLang + '/navbar/projects').valueChanges();
    this.owner = afDB.list(this.starterLang + '/navbar/projects').valueChanges();
   
  }

  ngOnInit() {
  }

//   addToFirebase() {
//     let project = $('.projectF').val();
//     let owner = $('.ownerF').val();

//     firebase.database().ref().child('tr').child('navbar').child('projects').update({
//       project33: project,
//       owner33: owner,
//     })
//     firebase.database().ref().child('en').child('navbar').child('projects').update({
//       project33: project,
//       owner33: owner,
//   })
// }

}
