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
      time: Date.now(),
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
        time: Date.now(),
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
    const time = Date.now();

    // console.log(title_en,title_tr,photo_en,photo_tr,text_en,text_tr,subtitle_en,subtitle_tr,detailedText_en,detailedText_tr)


    firebase.database().ref('/en/home/newsRegular/').push({
      photo: photo,
      text: text_en,
      title: title_en,
      time: time
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
          newsName: key,
          time: time
        })
      }

    }).then(() => { // Here comes the Turkish part
      firebase.database().ref('/tr/home/newsRegular/' + key).update({
        photo: photo,
        text: text_tr,
        title: title_tr,
        time: time
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
            time: time,
            text: text_tr,
            title: title_tr,
            newsName: key
          })
        }

      });
    });
  }

  events() {
    const place_en = $('#news-events-en').val();
    const place_tr = $('#news-events-tr').val();
    const photo = $('#news-photo').val();
    const speaker = $('#news-speaker').val();
    const text1_en = $('#news-text1-en').val();
    const text1_tr = $('#news-text1-tr').val();
    const text2_en = $('#news-text2-en').val();
    const text2_tr = $('#news-text2-tr').val();
    const text3_en = $('#news-text3-en').val();
    const text3_tr = $('#news-text3-tr').val();
    const title_en = $('#news-title-en').val();
    const title_tr = $('#news-title-tr').val();
    const topic_en = $('#news-topic-en').val();
    const topic_tr = $('#news-topic-tr').val();
    const date = $('#news-date').val().toString();

      function getTimeStamp(input) {
      var parts = input.trim().split(' ');
      var date = parts[0].split('-');
    var time = (parts[1] ? parts[1] : '00:00:00').split(':');
  
    // NOTE:: Month: 0 = January - 11 = December.
    var d = new Date(date[0],date[1]-1,date[2],time[0],time[1],time[2]);
    return d.getTime() / 1000;
  }

  function parseDate(date:string) {
    var newDate = date.split('-');
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    newDate[1] =mS[parseInt(newDate[1]) - 1]
     return newDate;
  }
  
  console.log(parseDate(date))


    /*   HERE COMES THE EN PART*/
      
    firebase.database().ref('/en/events').push({
           place:place_en,
           pp:photo,
           year:parseDate(date)[0],
           month:parseDate(date[1]),
           day:parseDate(date[2]),
           title:title_en,
           eventDetail: {
             pp:photo,
             speaker:speaker,
             text1: text1_en,
             text2:text2_en,
             text3:text3_en,
             title:title_en,
             topic:topic_en,
             venue:place_en
           }

    }).then(data => {
      firebase.database().ref('/en/events/' + data.key).push({
      eventName: data.key
      });
    })
 

      /*   HERE COMES THE TR PART*/
     /* 
      firebase.database().ref('/tr/events').push({
        place:place_en,
        pp:photo,
        title:title_en

 }).then(data => {
   firebase.database().ref('/tr/events/' + data.key).push({
   eventName: data.key
   });
 })
  } */

}


