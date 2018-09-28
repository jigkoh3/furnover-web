import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ModalDeleteBankAccountComponent } from 'src/app/pages/modals/modal-delete-bank-account/modal-delete-bank-account.component';

@Component({
  selector: 'app-modal-info-bank-account',
  templateUrl: './modal-info-bank-account.component.html',
  styleUrls: ['./modal-info-bank-account.component.css']
})
export class ModalInfoBankAccountComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }
  delete() {
    this.dialog.open(ModalDeleteBankAccountComponent, {
      width: "700px"
    });
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
