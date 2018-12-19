import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-confirm-remark',
  templateUrl: './modal-confirm-remark.component.html',
  styleUrls: ['./modal-confirm-remark.component.scss']
})
export class ModalConfirmRemarkComponent implements OnInit {
  remark: any;
  constructor(
    private thisDialogRef: MatDialogRef<ModalConfirmRemarkComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {

  }
  onClickOk() {
    this.thisDialogRef.close('confirm');
  }

  onClickCancel() {
    this.thisDialogRef.close({
      confirm: false,
      remark: ''
    });
  }
}
