import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLessonsComponent } from './project-lessons.component';

describe('ProjectLessonsComponent', () => {
  let component: ProjectLessonsComponent;
  let fixture: ComponentFixture<ProjectLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
