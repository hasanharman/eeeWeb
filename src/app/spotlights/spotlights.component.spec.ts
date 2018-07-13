import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightsComponent } from './spotlights.component';

describe('SpotlightsComponent', () => {
  let component: SpotlightsComponent;
  let fixture: ComponentFixture<SpotlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
