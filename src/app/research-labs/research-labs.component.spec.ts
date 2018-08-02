import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchLabsComponent } from './research-labs.component';

describe('ResearchLabsComponent', () => {
  let component: ResearchLabsComponent;
  let fixture: ComponentFixture<ResearchLabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchLabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
