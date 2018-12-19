import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {
  remark: any;
  constructor(
    private thisDialogRef: MatDialogRef<ModalConfirmComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {

  }
  onClickOk() {
    this.thisDialogRef.close({
      confirm: true,
      remark: this.remark
    });
  }

  onClickCancel() {
    this.thisDialogRef.close({
      confirm: false,
      remark: ''
    });
  }
}
