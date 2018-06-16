import { AngularFirestore } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { StuffComponent } from './stuff/stuff.component';
import { ResearchesComponent } from './researches/researches.component';
import { ArticlesComponent } from './articles/articles.component';
import { InternshipComponent } from './internship/internship.component';
import { ProjectLessonsComponent } from './project-lessons/project-lessons.component';
import { ContactComponent } from './contact/contact.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

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
  { path: 'education', component: EducationComponent},
  { path: 'stuff', component: StuffComponent},
  { path: 'researches', component: ResearchesComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'internship', component: InternshipComponent},
  { path: 'projectLesson', component: ProjectLessonsComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: 'home'},





]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    StuffComponent,
    ResearchesComponent,
    ArticlesComponent,
    InternshipComponent,
    ProjectLessonsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [    AngularFireDatabase,AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
