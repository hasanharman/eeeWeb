import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LablarComponent } from './lablar.component';

describe('LablarComponent', () => {
  let component: LablarComponent;
  let fixture: ComponentFixture<LablarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LablarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LablarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
