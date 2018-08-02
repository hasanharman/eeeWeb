import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateComponent } from './graduate.component';

describe('GraduateComponent', () => {
  let component: GraduateComponent;
  let fixture: ComponentFixture<GraduateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraduateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
