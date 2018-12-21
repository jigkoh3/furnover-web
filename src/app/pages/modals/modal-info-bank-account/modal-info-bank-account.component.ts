import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ModalDeleteBankAccountComponent } from 'src/app/pages/modals/modal-delete-bank-account/modal-delete-bank-account.component';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { Constants } from 'src/app/app.constants';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-modal-info-bank-account',
  templateUrl: './modal-info-bank-account.component.html',
  styleUrls: ['./modal-info-bank-account.component.css']
})
export class ModalInfoBankAccountComponent implements OnInit {
  showDetail: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public restApi: RestApiService,
    public dialogRef: MatDialogRef<ModalInfoBankAccountComponent>
  ) {
    // console.log(data);
  }

  ngOnInit() {
    this.getBankdata()
  }
  delete() {
    const dialogRef = this.dialog.open(ModalDeleteBankAccountComponent, {
      width: "700px",
      data: { _id: this.data._id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogRef.close(true);
      }
    });
  }

  async getBankdata() {
    try {
      let respone: any = await this.restApi.get(Constants.URL() + '/api/bankaccount/' + this.data._id)
      // console.log(respone);
      this.showDetail = respone.data;
    } catch (error) {

    }
  }
  // delete() {
  //     const dialogRef = this.dialog.open(ModalDeleteBankAccountComponent, {
  //       width: "700px"
  //     });
  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log('The dialog was closed');
  //     });

  // }
}
