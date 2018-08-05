import { TranslateService, LangChangeEvent } from 'ng2-translate';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-graduate',
  templateUrl: './graduate.component.html',
  styleUrls: ['./graduate.component.css']
})
export class GraduateComponent implements OnInit {
  starterLang = 'tr';
  collection;
  education;
  admissions;
  constructor(private afDB: AngularFireDatabase, translateService: TranslateService) { 
    if(!translateService.currentLang)  this.starterLang = 'tr' ;
    else this.starterLang = translateService.currentLang;
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.starterLang = event.lang;
      this.collection = afDB.list(this.starterLang + '/education/graduate').valueChanges();


    });
    this.collection = afDB.list(this.starterLang + '/education/graduate').valueChanges();
    this.admissions = afDB.list(this.starterLang + '/education/admissionDetails/text').valueChanges();

    
  }
 /*    copy() {
    let myVal = $('.myInput').val().toString();
    console.log(myVal);
    firebase.database().ref().child('tr').child('navbar').child(myVal + 'Details').update({
      academicsTitle:"Akademisyenler",
      collabText:"Kolaboratörler",
      projectsText:"Projeler",
      title:"ANTEN & MİKRODALGA",
      topicsText:"Başlıca Araştırma Konuları"
    }) */
   /*  firebase.database().ref().child('tr').child('navbar').child('antennaDetails').once('value',antenna => {
      console.log(antenna);
      
      firebase.database().ref().child('tr').child('navbar').child(myVal + 'Details').update(antenna.val())
    }) */
/*   }  */

  ngOnInit() {
  }
}
