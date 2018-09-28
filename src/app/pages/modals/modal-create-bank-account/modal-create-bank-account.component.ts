import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { Constants } from 'src/app/app.constants';

@Component({
  selector: 'app-modal-create-bank-account',
  templateUrl: './modal-create-bank-account.component.html',
  styleUrls: ['./modal-create-bank-account.component.css']
})
export class ModalCreateBankAccountComponent implements OnInit {
  Getbank: Array<any> = []
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  createBankData: any = {};


  constructor(
    private _formBuilder: FormBuilder,
    private restApi: RestApiService
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
    this.getBank();
    this.createBank();
  }
  async getBank() {
    try {
      let respone: any = await this.restApi.get(Constants.URL() + '/api/masterbankaccount');
      this.Getbank = respone.data;
      console.log(this.Getbank);
    } catch (error) {

    }

  }
  async createBank() {
    try {
      let user: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
      let data = {
        name: this.createBankData.name,
        bank_id: this.createBankData.bank_id,
        accountnumber: this.createBankData.accountnumber,
        accountname: this.createBankData.accountname,
        citizenid: this.createBankData.citizenid,
        shop_id: this.createBankData.shop_id
      }
      let respone: any = await this.restApi.post(Constants.URL() + '/api/bankaccount', data);
      this.createBankData = respone;
      console.log(respone);
    } catch (error) {

    }

  }
}
