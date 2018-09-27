import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoBankAccountComponent } from './modal-info-bank-account.component';

describe('ModalInfoBankAccountComponent', () => {
  let component: ModalInfoBankAccountComponent;
  let fixture: ComponentFixture<ModalInfoBankAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInfoBankAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
