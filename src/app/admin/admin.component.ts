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
  personNo:string;


  /* PERSONEL INFORMATION STARTS */
  bs;
  cv;
  dr;
  email;
  ms;
  name;
  number_tr;
  number_en;
  phd;
  postdr;
  socialMedias;
  surname;
  webLink;
  title_tr;
  title_en;
  /* PERSONEL INFORMATION ENDS */

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
              this.personNo = element.child('personNo').val();

             


 let facultyRef = firebase.database().ref("/tr/personels/faculty/" + this.personNo);
              facultyRef.once('value', personel =>{
                this.bs = personel.child("bs").val();
                this.cv = personel.child("cv").val();
                this.dr = personel.child("dr").val();
                this.email = personel.child("email").val();
                this.ms = personel.child("ms").val();
                this.name = personel.child("name").val();
                this.phd = personel.child("phd").val();
                this.number_tr = personel.child("number").val();
                this.number_en = personel.child("number").val();
                this.postdr = personel.child("postdr").val();
                this.socialMedias = personel.child("socialMedias").val();
                this.surname = personel.child("surname").val();
                this.title_tr = personel.child("title").val();
                this.title_en = personel.child("title").val();
                this.webLink = personel.child("webLink").val();
                 
              });

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
    const place_en = $('#events-events-en').val();
    const place_tr = $('#events-events-tr').val();
    const photo = $('#events-photo').val();
    const speaker = $('#events-speaker').val();
    const text1_en = $('#events-text1-en').val();
    const text1_tr = $('#events-text1-tr').val();
    const text2_en = $('#events-text2-en').val();
    const text2_tr = $('#events-text2-tr').val();
    const text3_en = $('#events-text3-en').val();
    const text3_tr = $('#events-text3-tr').val();
    const title_en = $('#events-title-en').val();
    const title_tr = $('#events-title-tr').val();
    const topic_en = $('#events-topic-en').val();
    const topic_tr = $('#events-topic-tr').val();
    const newsDate = $('#events-date-tr').val().toString();
    let key;
 
    var date = new Date(newsDate);
    var timestamp = date.getTime();
    console.log(timestamp)
    function parseDate(date: string) {
      var newDate = date.split('-');
      var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

      newDate[1] = mS[parseInt(newDate[1]) - 1]
      return newDate;
    }
    console.log("date is " +newsDate );


    /*   HERE COMES THE EN PART*/

    firebase.database().ref('/en/events').push({
      place: place_en,
      pp: photo,
      year: parseDate(newsDate)[0],
      month: parseDate(newsDate)[1],
      day: parseDate(newsDate)[2],
      time: timestamp,
      title: title_en,
      eventDetail: {
        pp: photo,
        speaker: speaker,
        text1: text1_en,
        text2: text2_en,
        text3: text3_en,
        title: title_en,
        topic: topic_en,
        venue: place_en
      }

    }).then((data) => {
      key = data.key;
      firebase.database().ref('/en/events/' + data.key).update({
        eventName: data.key
      });
    }).then(() => {
      console.log(key)
 /*   HERE COMES THE EN PART*/

    firebase.database().ref('/tr/events/' + key ).update({
      place: place_tr,
      pp: photo,
      year: parseDate(newsDate)[0],
      month: parseDate(newsDate)[1],
      day: parseDate(newsDate)[2],
      title: title_tr,
      time: timestamp,
      eventDetail: {
        pp: photo,
        speaker: speaker,
        text1: text1_tr,
        text2: text2_tr,
        text3: text3_tr,
        title: title_tr,
        topic: topic_tr,
        venue: place_tr
      }

    }).then(() => {
      firebase.database().ref('/en/events/' + key ).update({
        eventName:  key
      });
    })
    }).then( ()=> {
 /* THIS PART FOR HOME/events */

      /*   HERE COMES THE EN PART*/

      firebase.database().ref('/en/home/events/' +key).update({
        place: place_en,
        pp: photo,
        year: parseDate(newsDate)[0],
        month: parseDate(newsDate)[1],
        day: parseDate(newsDate)[2],
        time: timestamp,
        title: title_en,
        eventDetail: {
          pp: photo,
          speaker: speaker,
          text1: text1_en,
          text2: text2_en,
          text3: text3_en,
          title: title_en,
          topic: topic_en,
          venue: place_en
        }
  
      }).then((data) => { 
        firebase.database().ref('/en/home/events/' + key).update({
          eventName: key
        });
      }).then(() => {
        console.log(key)
   /*   HERE COMES THE EN PART*/
  
      firebase.database().ref('/tr/home/events/' + key ).update({
        place: place_tr,
        pp: photo,
        year: parseDate(newsDate)[0],
        month: parseDate(newsDate)[1],
        day: parseDate(newsDate)[2],
        title: title_tr,
        time: timestamp,
        eventDetail: {
          pp: photo,
          speaker: speaker,
          text1: text1_tr,
          text2: text2_tr,
          text3: text3_tr,
          title: title_tr,
          topic: topic_tr,
          venue: place_tr
        }
  
      }).then(() => {
        firebase.database().ref('/en/home/events/' + key ).update({
          eventName:  key
        });
      })
      });
  

    })



   
    
  }

  faculty() {


    let facultyRef = firebase.database().ref("/tr/personels/faculty/" + this.personNo);
    let facultyRef_en = firebase.database().ref("/en/personels/faculty/" + this.personNo);
    facultyRef.update({
      cv:   this.cv,
      email:   this.email,
      number:   this.number_tr,
      webLink:   this.webLink,
      title: this.title_tr
    });

    facultyRef_en.update({
      cv:   this.cv,
      email:   this.email,
      number:   this.number_en,
      webLink:   this.webLink,
      title: this.title_en
    });


  }


}