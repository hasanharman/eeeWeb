import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightsdetailComponent } from './spotlightsdetail.component';

describe('SpotlightsdetailComponent', () => {
  let component: SpotlightsdetailComponent;
  let fixture: ComponentFixture<SpotlightsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotlightsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
