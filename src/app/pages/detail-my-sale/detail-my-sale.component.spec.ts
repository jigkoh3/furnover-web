import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMySaleComponent } from './detail-my-sale.component';

describe('DetailMySaleComponent', () => {
  let component: DetailMySaleComponent;
  let fixture: ComponentFixture<DetailMySaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMySaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
