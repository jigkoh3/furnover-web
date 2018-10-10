import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPromotionComponent } from './my-promotion.component';

describe('MyPromotionComponent', () => {
  let component: MyPromotionComponent;
  let fixture: ComponentFixture<MyPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
