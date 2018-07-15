import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouteeeComponent } from './abouteee.component';

describe('AbouteeeComponent', () => {
  let component: AbouteeeComponent;
  let fixture: ComponentFixture<AbouteeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbouteeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouteeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
