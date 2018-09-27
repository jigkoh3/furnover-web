import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrepareShippingComponent } from './modal-prepare-shipping.component';

describe('ModalPrepareShippingComponent', () => {
  let component: ModalPrepareShippingComponent;
  let fixture: ComponentFixture<ModalPrepareShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPrepareShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPrepareShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
