import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOrderDetailComponent } from './info-order-detail.component';

describe('InfoOrderDetailComponent', () => {
  let component: InfoOrderDetailComponent;
  let fixture: ComponentFixture<InfoOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
