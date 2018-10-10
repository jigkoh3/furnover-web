import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteMyPromotionComponent } from './modal-delete-my-promotion.component';

describe('ModalDeleteMyPromotionComponent', () => {
  let component: ModalDeleteMyPromotionComponent;
  let fixture: ComponentFixture<ModalDeleteMyPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteMyPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteMyPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
