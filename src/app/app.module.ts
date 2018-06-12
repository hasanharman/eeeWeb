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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
