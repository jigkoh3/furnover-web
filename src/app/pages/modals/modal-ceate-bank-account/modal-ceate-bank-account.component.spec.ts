import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCeateBankAccountComponent } from './modal-ceate-bank-account.component';

describe('ModalCeateBankAccountComponent', () => {
  let component: ModalCeateBankAccountComponent;
  let fixture: ComponentFixture<ModalCeateBankAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCeateBankAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCeateBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
