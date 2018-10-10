import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMyPromotionComponent } from './info-my-promotion.component';

describe('InfoMyPromotionComponent', () => {
  let component: InfoMyPromotionComponent;
  let fixture: ComponentFixture<InfoMyPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMyPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMyPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
