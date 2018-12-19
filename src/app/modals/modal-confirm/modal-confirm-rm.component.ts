import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-confirm-rm',
  templateUrl: './modal-confirm-rm.component.html',
  styleUrls: ['./modal-confirm-rm.component.scss']
})
export class ModalConfirmRmComponent implements OnInit {
  remark: any;
  constructor(
    private thisDialogRef: MatDialogRef<ModalConfirmRmComponent>,
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
