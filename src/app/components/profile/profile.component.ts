import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalPrepareShippingComponent } from '../../pages/modals/modal-prepare-shipping/modal-prepare-shipping.component';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileSettingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalPrepareShippingComponent, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
