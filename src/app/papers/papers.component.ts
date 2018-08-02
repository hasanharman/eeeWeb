import { TranslateService, LangChangeEvent } from 'ng2-translate';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.css']
})
export class PapersComponent implements OnInit {
  year;
  text;
  contents;
  starterLang = 'tr'
 

  constructor(afDB: AngularFireDatabase, translateService:TranslateService,private route: ActivatedRoute) {
     
    console.log(translateService.currentLang );
    if(!translateService.currentLang)  this.starterLang = 'tr' ;
    else this.starterLang = translateService.currentLang;

    console.log(this.starterLang);
    this.route.params.subscribe(params => {
      this.year = params;
       this.contents = afDB.list(this.starterLang + '/navbar/papers/' + this.year.year).valueChanges();
});

    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.starterLang = event.lang;
      this.contents = afDB.list(this.starterLang + '/navbar/papers/' + this.year.year).valueChanges();
      
   })
   
  };

  getYear():string {
    return '2017'
  }
  ngOnInit() {
  }

  /* write() {
    console.log(this.year.year);
    this.text=  $('.myInput').val();
    console.log(this.text);
    

     firebase.database().ref().child('en').child('navbar').child('papers').child(this.year.year).once('value',data => {
console.log(data.numChildren());
let newPath = 'p' + (data.numChildren()+1)
firebase.database().ref().child('en').child('navbar').child('papers').child(this.year.year).update({
[newPath]: this.text
})
     });



     firebase.database().ref().child('tr').child('navbar').child('papers').child(this.year.year).once('value',data => {
      console.log(data.numChildren());
      let newPath = 'p' + (data.numChildren()+1)
      firebase.database().ref().child('tr').child('navbar').child('papers').child(this.year.year).update({
      [newPath]: this.text
      })
           })
  } */
}
