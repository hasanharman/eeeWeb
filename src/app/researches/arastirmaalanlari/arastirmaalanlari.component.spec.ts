import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArastirmaalanlariComponent } from './arastirmaalanlari.component';

describe('ArastirmaalanlariComponent', () => {
  let component: ArastirmaalanlariComponent;
  let fixture: ComponentFixture<ArastirmaalanlariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArastirmaalanlariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArastirmaalanlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
