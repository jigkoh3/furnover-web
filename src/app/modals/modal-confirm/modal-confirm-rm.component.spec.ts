import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmRmComponent } from './modal-confirm-rm.component';

describe('ModalConfirmRmComponent', () => {
  let component: ModalConfirmRmComponent;
  let fixture: ComponentFixture<ModalConfirmRmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConfirmRmComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
