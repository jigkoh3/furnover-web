import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalUploadYoutubeComponent } from '../../pages/modals/modal-upload-youtube/modal-upload-youtube.component';

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
    const dialogRef = this.dialog.open(ModalUploadYoutubeComponent, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
