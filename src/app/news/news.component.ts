import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  starterLang = 'tr'
  routerDirective;
  title:string;
  text:string;
  photoUrl:string;
  subtitle:string;
  constructor(private route: ActivatedRoute ) {
    this.route.params.subscribe(params => {
      this.routerDirective = params['newsId'];

      firebase.database().ref().child('tr').child('home').child('news').child(this.routerDirective)
      .once('value',news => {
        this.title = news.child('newsDetails').child('title').val(); 
        this.text = news.child('newsDetails').child('text').val();
        this.photoUrl = news.child('newsDetails').child('photoUrl').val(); 
        this.subtitle = news.child('newsDetails').child('subtitle').val(); 
        
      })
    });
   }

  ngOnInit() {
  }

}
