import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Constants } from 'src/app/app.constants';
import { DataService } from 'src/app/providers/data-service/data.service';
import { ModalCompleteComponent } from 'src/app/pages/modals/modal-complete/modal-complete.component';

@Component({
  selector: 'app-modal-delete-bank-account',
  templateUrl: './modal-delete-bank-account.component.html',
  styleUrls: ['./modal-delete-bank-account.component.css']
})
export class ModalDeleteBankAccountComponent implements OnInit {
  showDetail: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService,
    public dialog: MatDialog,
    private restApi: RestApiService,
    public dialogRef: MatDialogRef<ModalDeleteBankAccountComponent>
  ) { }

  ngOnInit() {
    this.getDetail();
  }
  async getDetail() {
    try {
      let respone: any = await this.restApi.get(Constants.URL() + '/api/bankaccount/' + this.data._id)
      // console.log(respone);
      this.showDetail = respone.data;
    } catch (error) {

    }
  }
  async delete() {
    try {
      await this.restApi.delete(Constants.URL() + '/api/bankaccount/' + this.data._id)
      this.dialogRef.close(true);
      this.dialog.open(ModalCompleteComponent, {
        width: '700px',
        data: { message: 'ลบข้อมูลบัญชีธนาคารของคุณสำเร็จ' }
      });
    } catch (error) {

    }


  }

}
