import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmRemarkComponent } from './modal-confirm-remark.component';

describe('ModalConfirmRemarkComponent', () => {
  let component: ModalConfirmRemarkComponent;
  let fixture: ComponentFixture<ModalConfirmRemarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConfirmRemarkComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
