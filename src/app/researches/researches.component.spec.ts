import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchesComponent } from './researches.component';

describe('ResearchesComponent', () => {
  let component: ResearchesComponent;
  let fixture: ComponentFixture<ResearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
