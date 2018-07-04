import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfactsComponent } from './fastfacts.component';

describe('FastfactsComponent', () => {
  let component: FastfactsComponent;
  let fixture: ComponentFixture<FastfactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastfactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastfactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
