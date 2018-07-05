import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultydetailComponent } from './facultydetail.component';

describe('FacultydetailComponent', () => {
  let component: FacultydetailComponent;
  let fixture: ComponentFixture<FacultydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
