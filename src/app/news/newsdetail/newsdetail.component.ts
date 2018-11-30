import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { TranslateService, LangChangeEvent } from '../../../../node_modules/ng2-translate';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit {
  starterLang = 'tr'
  routerDirective;
  title: string;
  text: string;
  photoUrl1: string;
  photoUrl2: string;
  photoUrl3: string;
  subtitle: string;
  newDate: string;

  constructor(private route: ActivatedRoute, translateService: TranslateService) {
    if (!translateService.currentLang) this.starterLang = 'tr';
    else this.starterLang = translateService.currentLang;
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {

      console.log(event.lang);
      this.starterLang = event.lang;

      firebase.database().ref().child(this.starterLang).child('home').child('newsRegular').child(this.routerDirective)
        .once('value', news => {
          console.log(news.val());

          this.title = news.child('newsDetail').child('title').val();
          console.log(news.child('newsDetail').child('text').val());

          $(".text").append(news.child('newsDetail').child('text').val())
          this.photoUrl1 = news.child('newsDetail').child('photoUrl1').val();
          this.photoUrl2 = news.child('newsDetail').child('photoUrl2').val();
          this.photoUrl3 = news.child('newsDetail').child('photoUrl3').val();
          this.subtitle = news.child('newsDetail').child('subtitle').val();
          this.newDate = news.child('newDate').val();

        })

    });

    this.route.params.subscribe(params => {
      this.routerDirective = params['newsId'];
      console.log(this.routerDirective);

      firebase.database().ref().child(this.starterLang).child('home').child('newsRegular').child(this.routerDirective)
        .once('value', news => {
          console.log(news.val());

          this.title = news.child('newsDetail').child('title').val();
          console.log(news.child('newsDetail').child('text').val());

          $(".text").append(news.child('newsDetail').child('text').val());
          this.photoUrl1 = news.child('newsDetail').child('photoUrl1').val();
          this.photoUrl2 = news.child('newsDetail').child('photoUrl2').val();
          this.photoUrl3 = news.child('newsDetail').child('photoUrl3').val();
           
          this.newDate = news.child('newDate').val();

        })
    });
  }

  ngOnInit() {
  }

}
