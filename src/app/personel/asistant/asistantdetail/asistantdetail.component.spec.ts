import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistantdetailComponent } from './asistantdetail.component';

describe('AsistantdetailComponent', () => {
  let component: AsistantdetailComponent;
  let fixture: ComponentFixture<AsistantdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistantdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistantdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
