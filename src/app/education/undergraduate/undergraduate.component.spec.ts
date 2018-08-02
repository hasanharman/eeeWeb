import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndergraduateComponent } from './undergraduate.component';

describe('UndergraduateComponent', () => {
  let component: UndergraduateComponent;
  let fixture: ComponentFixture<UndergraduateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndergraduateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndergraduateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
