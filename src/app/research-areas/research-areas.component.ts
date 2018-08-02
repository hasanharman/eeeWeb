import { TranslateService, LangChangeEvent } from 'ng2-translate';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-research-areas',
  templateUrl: './research-areas.component.html',
  styleUrls: ['./research-areas.component.css']
})
export class ResearchAreasComponent implements OnInit {
  text;
  text2;
  text3;
  text4;
  text5;

  contents;
  starterLang = 'tr'
  routerDirective;

  constructor(afDB: AngularFireDatabase, translateService: TranslateService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.routerDirective = params['Id'] + 'Details';
      //console.log(this.routerDirective,typeof(this.routerDirective));
    })
    firebase.database().ref().child('tr').child('navbar').child(this.routerDirective).once('value', data => {
      console.log(data.child('title').val());

    })
  }

  ngOnInit() {

  }

  // write() {
  //   this.text = $('.myInput').val();
  //   this.text2 = $('.myInput2').val();
  //   this.text3 = $('.myInput3').val();
  //   this.text4 = $('.myInput4').val();
  //   this.text5 = $('.myInput5').val();


    // firebase.database().ref().child('en').child('navbar').child('telecomDetails').child('academics').once('value', data => {
    //   let newPath = 'a' + (data.numChildren() + 1)
    //   firebase.database().ref().child('en').child('navbar').child('telecomDetails').child('academics').update({
    //     [newPath]: this.text
    //   })
    // });

    // firebase.database().ref().child('tr').child('navbar').child('telecomDetails').child('academics').once('value', data => {
    //   let newPath = 'a' + (data.numChildren() + 1)
    //   firebase.database().ref().child('tr').child('navbar').child('telecomDetails').child('academics').update({
    //     [newPath]: this.text
    //   })
    // })
    // firebase.database().ref().child('en').child('navbar').child('telecomDetails').child('researches').once('value', data => {
    //   let newPath = 'a' + (data.numChildren() + 1)
    //   firebase.database().ref().child('en').child('navbar').child('telecomDetails').child('researches').update({
    //     [newPath]: this.text2
    //   })
    // });

    // firebase.database().ref().child('tr').child('navbar').child('telecomDetails').child('researches').once('value', data => {
    //   let newPath = 'a' + (data.numChildren() + 1)
    //   firebase.database().ref().child('tr').child('navbar').child('telecomDetails').child('researches').update({
    //     [newPath]: this.text2
    //   })
    // })

    // firebase.database().ref().child('en').child('navbar').child('telecomDetails').child('topics').once('value', data => {
    //   let newPath = 'a' + (data.numChildren() + 1)
    //   firebase.database().ref().child('en').child('navbar').child('telecomDetails').child('topics').update({
    //     [newPath]: this.text3
    //   })
    // });

    // firebase.database().ref().child('tr').child('navbar').child('telecomDetails').child('topics').once('value', data => {
    //   let newPath = 'a' + (data.numChildren() + 1)
    //   firebase.database().ref().child('tr').child('navbar').child('telecomDetails').child('topics').update({
    //     [newPath]: this.text3
    //   })
    // })
    // firebase.database().ref().child('en').child('navbar').child('telecomDetails').child('projects').once('value', data => {
    //   let newPath = 'a' + (data.numChildren() + 1)
    //   firebase.database().ref().child('en').child('navbar').child('telecomDetails').child('projects').update({
    //     [newPath]: this.text4
    //   })
    // });

    // firebase.database().ref().child('tr').child('navbar').child('telecomDetails').child('projects').once('value', data => {
    //   let newPath = 'a' + (data.numChildren() + 1)
    //   firebase.database().ref().child('tr').child('navbar').child('telecomDetails').child('projects').update({
    //     [newPath]: this.text4
    //   })
    // })
    // firebase.database().ref().child('en').child('navbar').child('telecomDetails').child('collab').once('value', data => {
    //   let newPath = 'a' + (data.numChildren() + 1)
    //   firebase.database().ref().child('en').child('navbar').child('telecomDetails').child('collab').update({
    //     [newPath]: this.text5
    //   })
    // });

    // firebase.database().ref().child('tr').child('navbar').child('telecomDetails').child('collab').once('value', data => {
    //   let newPath = 'a' + (data.numChildren() + 1)
    //   firebase.database().ref().child('tr').child('navbar').child('telecomDetails').child('collab').update({
    //     [newPath]: this.text5
    //   })
    // })

  }

