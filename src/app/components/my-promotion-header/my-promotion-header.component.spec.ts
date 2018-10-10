import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPromotionHeaderComponent } from './my-promotion-header.component';

describe('MyPromotionHeaderComponent', () => {
  let component: MyPromotionHeaderComponent;
  let fixture: ComponentFixture<MyPromotionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPromotionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPromotionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
