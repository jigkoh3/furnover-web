import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-create-bank-account',
  templateUrl: './modal-create-bank-account.component.html',
  styleUrls: ['./modal-create-bank-account.component.css']
})
export class ModalCreateBankAccountComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  bank = [
    { viewValue: 'ธนาคารออมสิน (GSB)' },
    { viewValue: 'ธนาคารเพื่อการเกษตร (BAAC)' },
    { viewValue: 'ไทยพาณิชย์ (SCB)' }
  ];


  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      citizinid: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      bankNumber: ['', Validators.required],
      nameBank: ['', Validators.required]
    });
  }

}
