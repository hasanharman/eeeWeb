import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
declare var jdetects: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  panel = false;
  entered = true;
  userName: string;
  constructor() {

  }

  ngOnInit() {




  }

  login() {

    firebase.database().ref('/admins').once('value', val => {
      val.forEach(element => {
        if (this.entered) {
          if ($('.mail').val() == element.child('mail').val()) {
            if ($('.password').val() == element.child('password').val()) {
              console.log('You have succesfuly entered');
              this.entered = false;
              this.panel = true;
              this.userName = element.child('name').val();

            } else {
              console.log('Wrong Password');
              $(document).remove()
              location.reload();
            }
          }
        }

      });
    });
  }

  announcement() {
    /* EN */
    let key;
    firebase.database().ref('/en/announcements').push({
      title: $('#notification-title-en').val(),
      text: $('#notification-text-en').val(),
      pp: $('#notification-photo-en').val(),
      type: parseInt($('#notification-type').val().toString())
    }).then((snap) => {
      console.log(snap);
      firebase.database().ref('/en/announcements/' + snap.key).update({
        key: snap.key
      })
      key = snap.key;
      /* TR */

      firebase.database().ref('/tr/announcements/' + key).update({
        title: $('#notification-title-tr').val(),
        text: $('#notification-text-tr').val(),
        pp: $('#notification-photo-tr').val(),
        type: parseInt($('#notification-type').val().toString()),
        key: key
      })
    })


  }

  news() {
    let key;
    const title_en = $('#news-title-en').val();
    const title_tr = $('#news-title-tr').val();
    const photo = $('#news-photo').val();
    const text_en = $('#news-text-en').val();
    const text_tr = $('#news-text-tr').val();
    const subtitle_en = $('#news-subtitle-en').val();
    const subtitle_tr = $('#news-subtitle-tr').val();
    const detailedText_en = $('#news-detailedText-en').val();
    const detailedText_tr = $('#news-detailedText-tr').val();
    const addHome = $('#news-addHome').val();

    // console.log(title_en,title_tr,photo_en,photo_tr,text_en,text_tr,subtitle_en,subtitle_tr,detailedText_en,detailedText_tr)


    firebase.database().ref('/en/home/newsRegular/').push({
      photo: photo,
      text: text_en,
      title: title_en
    }).then((event) => {
      key = event.key;
      firebase.database().ref('/en/home/newsRegular/' + event.key).update({
        newsName: key,
        newsDetail: {
          newsName: key,
          photoUrl: photo,
          subtitle: subtitle_en,
          text: detailedText_en,
          title: title_en
        }
      });
    }).then(() => {
      if (addHome == "add") {
        firebase.database().ref('/en/home/news/' + key).update({
          photo: photo,
          text: text_en,
          title: title_en,
          newsName: key
        })
      }

    }).then(() => { // Here comes the Turkish part
      firebase.database().ref('/tr/home/newsRegular/' + key).update({
        photo: photo,
        text: text_tr,
        title: title_tr
      }).then(() => {
        firebase.database().ref('/tr/home/newsRegular/' + key).update({
          newsName: key,
          newsDetail: {
            newsName: key,
            photoUrl: photo,
            subtitle: subtitle_tr,
            text: detailedText_tr,
            title: title_tr
          }
        });
      }).then(() => {
        if (addHome == "add") {
          firebase.database().ref('/tr/home/news/' + key).update({
            photo: photo,
            text: text_tr,
            title: title_tr,
            newsName: key
          })
        }

      });
    });








  }
}
