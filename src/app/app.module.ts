import { AngularFirestore } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './about/contact/contact.component';
import { HistoryComponent } from './about/history/history.component';
import { StuffComponent } from './stuff/stuff.component';
import { ResearchesComponent } from './researches/researches.component';
import { ArticlesComponent } from './articles/articles.component';
import { InternshipComponent } from './internship/internship.component';
import { ProjectLessonsComponent } from './project-lessons/project-lessons.component';
import { AdminComponent } from './admin/admin.component';
import { ArastirmaalanlariComponent } from './researches/arastirmaalanlari/arastirmaalanlari.component';
import { LablarComponent } from './researches/lablar/lablar.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PersondetailComponent } from './stuff/persondetail/persondetail.component';
import { NewsComponent } from './news/news.component';
import { NotTurkishPipe } from './not-turkish.pipe';
import { AboutComponent } from './about/about.component';
import { FastfactsComponent } from './about/fastfacts/fastfacts.component';
import { AdministrationComponent } from './about/administration/administration.component';
  

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
  { path: 'stuff', component: StuffComponent},
  { path: 'arastirmaalanlari', component: ArastirmaalanlariComponent},
  { path: 'lablar', component: LablarComponent},
  { path: 'internship', component: InternshipComponent},
  { path: 'projectLesson', component: ProjectLessonsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'staff/:id', component: PersondetailComponent},
  { path: 'news/:newsId', component: NewsComponent},
  { path: '**', redirectTo: 'home'}

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StuffComponent,
    ResearchesComponent,
    ArticlesComponent,
    InternshipComponent,
    ProjectLessonsComponent,
    ContactComponent,
    AdminComponent,
    ArastirmaalanlariComponent,
    LablarComponent,
    PersondetailComponent,
    NewsComponent,
    NotTurkishPipe,
    AboutComponent,
    HistoryComponent,
    FastfactsComponent,
    AdministrationComponent,
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes ),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [    AngularFireDatabase,AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
