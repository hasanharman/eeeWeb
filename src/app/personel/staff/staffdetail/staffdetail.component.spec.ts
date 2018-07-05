import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffdetailComponent } from './staffdetail.component';

describe('StaffdetailComponent', () => {
  let component: StaffdetailComponent;
  let fixture: ComponentFixture<StaffdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
