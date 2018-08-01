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
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.year = params;
    });

  }

  ngOnInit() {
  }

  write() {
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
  }
}
