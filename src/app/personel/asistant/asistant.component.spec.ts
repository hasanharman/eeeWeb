import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistantComponent } from './asistant.component';

describe('AsistantComponent', () => {
  let component: AsistantComponent;
  let fixture: ComponentFixture<AsistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
