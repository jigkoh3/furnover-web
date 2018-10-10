import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPromotionListComponent } from './my-promotion-list.component';

describe('MyPromotionListComponent', () => {
  let component: MyPromotionListComponent;
  let fixture: ComponentFixture<MyPromotionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPromotionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPromotionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
