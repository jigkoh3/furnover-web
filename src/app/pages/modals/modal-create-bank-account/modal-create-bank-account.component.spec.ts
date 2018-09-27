import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateBankAccountComponent } from './modal-create-bank-account.component';

describe('ModalCeateBankAccountComponent', () => {
  let component: ModalCreateBankAccountComponent;
  let fixture: ComponentFixture<ModalCreateBankAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateBankAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
