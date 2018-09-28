import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { Constants } from 'src/app/app.constants';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ModalCompleteComponent } from 'src/app/pages/modals/modal-complete/modal-complete.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/providers/data-service/data.service';

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
  createBankData: any = {
    bank:{}
  };


  constructor(
    private _formBuilder: FormBuilder,
    private restApi: RestApiService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private dataService: DataService,
    public dialogRef: MatDialogRef<ModalCreateBankAccountComponent>


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
    // this.createBank();
  }
  async getBank() {
    try {
      let respone: any = await this.restApi.get(Constants.URL() + '/api/masterbankaccount');
      this.Getbank = respone.data;
      this.createBankData.bank=this.Getbank[0];
    } catch (error) {

    }

  }
  async createBank() {
    // console.log(this.createBankData);
    this.spinner.show();
    try {
      let user: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
      let data = {
        name: this.createBankData.name,
        bank_id: this.createBankData.bank._id,
        accountnumber: this.createBankData.accountnumber,
        accountname: this.createBankData.accountname,
        citizenid: this.createBankData.citizenid,
        shop_id: user.shop_id
      }
      let respone: any = await this.restApi.post(Constants.URL() + '/api/bankaccount', data);
      this.spinner.hide();      
      this.dialogRef.close(true);
      this.dialog.open(ModalCompleteComponent, {
        width: '700px',
        data: { message: 'บันทึกข้อมูลบัญชีธนาคารของคุณสำเร็จ' }
      });
      // console.log(respone);
    } catch (error) {
      this.spinner.hide();
      setTimeout(() => {
        this.dataService.error('บันทึกข้อมูลล้มเหลว');
      }, 3000);
    }

  }
}
