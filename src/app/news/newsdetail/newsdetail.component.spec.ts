import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsdetailComponent } from './newsdetail.component';

describe('NewsdetailComponent', () => {
  let component: NewsdetailComponent;
  let fixture: ComponentFixture<NewsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
