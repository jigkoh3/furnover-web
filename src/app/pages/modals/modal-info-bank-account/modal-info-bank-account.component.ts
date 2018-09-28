import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ModalDeleteBankAccountComponent } from 'src/app/pages/modals/modal-delete-bank-account/modal-delete-bank-account.component';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { Constants } from 'src/app/app.constants';

@Component({
  selector: 'app-modal-info-bank-account',
  templateUrl: './modal-info-bank-account.component.html',
  styleUrls: ['./modal-info-bank-account.component.css']
})
export class ModalInfoBankAccountComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.getBankdata()
  }
  delete() {
    this.dialog.open(ModalDeleteBankAccountComponent, {
      width: "700px"
    });
  }
  async getBankdata() {
    try {
      let user: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
      let data = {
        shop_id: user.shop_id
      }
      let respone: any = await this.restApi.post(Constants.URL() + '/api/bank-account-shop', data)
      console.log(respone);
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
