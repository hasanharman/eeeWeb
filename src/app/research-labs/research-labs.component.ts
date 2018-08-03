import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-research-labs',
  templateUrl: './research-labs.component.html',
  styleUrls: ['./research-labs.component.css']
})
export class ResearchLabsComponent implements OnInit {
  labName;
  starterLang = 'tr'

  academicsText;
collabText;
projectsText;
researchesText;
topicsText;
title;

  academics;
  searchers;
  collab;
  topics;
  projects;
  constructor(private route: ActivatedRoute,afDB: AngularFireDatabase) {
    this.route.params.subscribe(params => {
      this.labName = params['Id']+ 'LabDetails';;
      console.log(this.labName);
      
      this.academics = afDB.list(this.starterLang + '/navbar/'+ this.labName + '/academics').valueChanges();
      this.searchers = afDB.list(this.starterLang + '/navbar/'+ this.labName + '/researches').valueChanges();
      this.collab = afDB.list(this.starterLang + '/navbar/'+ this.labName + '/collab').valueChanges();
      this.topics = afDB.list(this.starterLang + '/navbar/'+ this.labName + '/topics').valueChanges();
      this.projects = afDB.list(this.starterLang + '/navbar/'+ this.labName + '/projects').valueChanges();

      firebase.database().ref().child('tr').child('navbar').child(this.labName).once('value', data => {
        console.log(data.child('title').val());
        this.title = data.child('title').val();
        this.academicsText = data.child('academicsTitle').val();
        this.collabText = data.child('collabText').val();
        this.projectsText = data.child('projectsText').val();
        this.researchesText = data.child('researchersText').val();
        this.topicsText = data.child('topicsText').val();
      })
});

/* firebase.database().ref().child('tr').child('personels').child('faculty').child('person24').once('value',data => {
  firebase.database().ref().child('en').child('personels').child('faculty').child('person24').update(data.val())
}) */
   }

  ngOnInit() {
  }

}
