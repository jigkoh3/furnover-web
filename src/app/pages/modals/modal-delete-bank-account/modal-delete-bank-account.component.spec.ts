import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteBankAccountComponent } from './modal-delete-bank-account.component';

describe('ModalDeleteBankAccountComponent', () => {
  let component: ModalDeleteBankAccountComponent;
  let fixture: ComponentFixture<ModalDeleteBankAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteBankAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
