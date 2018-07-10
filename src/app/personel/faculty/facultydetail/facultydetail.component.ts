import { element } from 'protractor';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-facultydetail',
  templateUrl: './facultydetail.component.html',
  styleUrls: ['./facultydetail.component.css']
})
export class FacultydetailComponent implements OnInit {
  allStuffs;
  name;
  surname;
  number;
  email;
  webLink;
  phd;
  ms;
  bs;
  pp;
  title;
  researches;
  lessons;
  publications;

  constructor(private route: ActivatedRoute, afDB: AngularFireDatabase) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.allStuffs = afDB.list('personels/faculty').valueChanges().subscribe(data => {
        data.forEach((element: any) => {
          if (params['id'] == element.userId) {
            this.pp = element.pp;
            this.name = element.name;
            this.surname = element.surname;
            this.number = element.number;
            this.email = element.email;
            this.webLink = element.webLink;
            this.phd = element.phd;
            this.ms = element.ms;
            this.bs = element.bs;
            this.title = element.title;

            this.lessons = Object.keys(element.lessons).map(function (key) {
              return [element.lessons[key]]
            });
            this.researches = Object.keys(element.researches).map(function (key) {
              return [element.researches[key]]
            });
            this.publications = Object.keys(element.publications).map(function (key) {
              return [element.publications[key]]
            });
          }
        });
      })
    });
  }
  ngOnInit() {
  }

  lessonFunction() {
    $('.publication').hide()
    $('.research').hide()
    $('.lesson').toggle()
  }

  researchFunction() {
    $('.publication').hide()
    $('.lesson').hide()
    $('.research').toggle()
  }

  publicationFunction() {
    $('.research').hide()
    $('.lesson').hide()
    $('.publication').toggle()

  }

}
