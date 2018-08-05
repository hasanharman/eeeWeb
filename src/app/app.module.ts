import { UndergraduateComponent } from './education/undergraduate/undergraduate.component';
import { GraduateComponent } from './education/graduate/graduate.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './about/contact/contact.component';
import { InternshipComponent } from './internship/internship.component';
import { ProjectLessonsComponent } from './project-lessons/project-lessons.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
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
import { AbouteeeComponent } from './about/abouteee/abouteee.component';
import { NewsdetailComponent } from './news/newsdetail/newsdetail.component';
import { ProjectsComponent } from './projects/projects.component';
import { LongtextPipe } from './longtext.pipe';
import { PapersComponent } from './papers/papers.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { ResearchAreasComponent } from './research-areas/research-areas.component';
import { ResearchLabsComponent } from './research-labs/research-labs.component';


  

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
  { path: 'administration', component: AdministrationComponent},
  { path: 'faculty', component: FacultyComponent},
  { path: 'faculty/:id', component: FacultydetailComponent},
  { path: 'asistant', component: AsistantComponent},
  { path: 'asistant/:id', component: AsistantdetailComponent},
  { path: 'staff', component: StaffComponent},
  { path: 'staff/:id', component: StaffdetailComponent},
  { path: 'spotlights', component: SpotlightsComponent},
  { path: 'spotlights/:id', component: SpotlightsdetailComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'internship', component: InternshipComponent},
  { path: 'projectLesson', component: ProjectLessonsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'abouteee', component: AbouteeeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'news', component: NewsComponent},
  { path: 'newsdetail/:newsId', component: NewsdetailComponent},
  { path: 'papers/:year', component: PapersComponent},
  { path: 'graduate', component: GraduateComponent},
  { path: 'undergraduate', component: UndergraduateComponent},
  { path: 'events', component: EventsComponent},
  { path: 'events/:Id', component: EventDetailComponent},
  { path: 'lab/:Id', component: ResearchLabsComponent},
  { path: 'area/:Id', component: ResearchAreasComponent},
  { path: 'event/:Id', component: EventDetailComponent},
  { path: '**', redirectTo: 'home'}

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternshipComponent,
    ProjectLessonsComponent,
    ContactComponent,
    AdminComponent,
    NewsComponent,
    NotTurkishPipe,
    AboutComponent,
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
    AbouteeeComponent,
    NewsdetailComponent,
    ProjectsComponent,
    LongtextPipe,
    PapersComponent,
    GraduateComponent,
    UndergraduateComponent,
    EventsComponent,
    EventDetailComponent,
    ResearchAreasComponent,
    ResearchLabsComponent,
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
