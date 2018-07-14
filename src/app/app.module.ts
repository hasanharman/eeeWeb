import { AngularFirestore } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './about/contact/contact.component';
import { HistoryComponent } from './about/history/history.component';
import { ResearchesComponent } from './researches/researches.component';
import { ArticlesComponent } from './articles/articles.component';
import { InternshipComponent } from './internship/internship.component';
import { ProjectLessonsComponent } from './project-lessons/project-lessons.component';
import { AdminComponent } from './admin/admin.component';
import { ArastirmaalanlariComponent } from './researches/arastirmaalanlari/arastirmaalanlari.component';
import { LablarComponent } from './researches/lablar/lablar.component';
import { AboutComponent } from './about/about.component';
import { FastfactsComponent } from './about/fastfacts/fastfacts.component';
import { AdministrationComponent } from './about/administration/administration.component';
import { PersonelComponent } from './personel/personel.component';
import { FacultyComponent } from './personel/faculty/faculty.component';
import { AsistantComponent } from './personel/asistant/asistant.component';
import { StaffComponent } from './personel/staff/staff.component';
import { FacultydetailComponent } from './personel/faculty/facultydetail/facultydetail.component';
import { AsistantdetailComponent } from './personel/asistant/asistantdetail/asistantdetail.component';
import { StaffdetailComponent } from './personel/staff/staffdetail/staffdetail.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './news/news.component';
import { NotTurkishPipe } from './not-turkish.pipe';
import { SpotlightsComponent } from './spotlights/spotlights.component';
import { SpotlightsdetailComponent } from './spotlights/spotlightsdetail/spotlightsdetail.component';
import { Http } from '../../node_modules/@angular/http';


  

export const firebaseConfig = {
  apiKey: "AIzaSyB8kG6xZmz7PgQ1JaBFjaM8C16PmCJI5AA",
    authDomain: "eeeweb-c2788.firebaseapp.com",
    databaseURL: "https://eeeweb-c2788.firebaseio.com",
    projectId: "eeeweb-c2788",
    storageBucket: "eeeweb-c2788.appspot.com",
    messagingSenderId: "1089413896706"
};
firebase.initializeApp(firebaseConfig);

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'announcements', component: AnnouncementsComponent},
  { path: 'faculty', component: FacultyComponent},
  { path: 'faculty/:id', component: FacultydetailComponent},
  { path: 'asistant', component: AsistantComponent},
  { path: 'asistant/:id', component: AsistantdetailComponent},
  { path: 'staff', component: StaffComponent},
  { path: 'staff/:id', component: StaffdetailComponent},
  { path: 'spotlights', component: SpotlightsComponent},
  { path: 'spotlights/:id', component: SpotlightsdetailComponent},
  { path: 'arastirmaalanlari', component: ArastirmaalanlariComponent},
  { path: 'lablar', component: LablarComponent},
  { path: 'internship', component: InternshipComponent},
  { path: 'projectLesson', component: ProjectLessonsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'news/:newsId', component: NewsComponent},
  { path: '**', redirectTo: 'home'}

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResearchesComponent,
    ArticlesComponent,
    InternshipComponent,
    ProjectLessonsComponent,
    ContactComponent,
    AdminComponent,
    ArastirmaalanlariComponent,
    LablarComponent,
    NewsComponent,
    NotTurkishPipe,
    AboutComponent,
    HistoryComponent,
    FastfactsComponent,
    AdministrationComponent,
    PersonelComponent,
    FacultyComponent,
    AsistantComponent,
    StaffComponent,
    FacultydetailComponent,
    AsistantdetailComponent,
    StaffdetailComponent,
    AnnouncementsComponent,
    SpotlightsComponent,
    SpotlightsdetailComponent,
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes ),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'https://eeeweb-c2788.firebaseio.com', '.json'),
      deps: [Http]
  })
  ],
  providers: [    AngularFireDatabase,AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
