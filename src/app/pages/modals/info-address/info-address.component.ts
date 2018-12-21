import { Component, OnInit, Inject } from '@angular/core';
import { RestApiService } from '../../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../../app.constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../../providers/data-service/data.service';
import { ModalCompleteComponent } from '../modal-complete/modal-complete.component';
import { DialogData } from '../modal-prepare-shipping/modal-prepare-shipping.component';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';


@Component({
  selector: 'app-info-address',
  templateUrl: './info-address.component.html',
  styleUrls: ['./info-address.component.css']
})
export class InfoAddressComponent implements OnInit {

  data: any = {};
  constructor(

    private restApi: RestApiService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    private dataService: DataService,
    public dialogRef: MatDialogRef<InfoAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public editdata: DialogData
  ) {
    if (this.editdata) {
      this.data = this.editdata;
    }
  }

  ngOnInit() {
  }

  async clickSave() {
    this.spinner.show();
    if (this.data._id) {
      try {
        let response: any = await this.restApi.put(Constants.URL() + '/api/address/' + this.data._id, this.data);
        this.dialogRef.close(true);
        this.spinner.hide();
        this.dialog.open(ModalCompleteComponent, {
          width: '700px',
          data: { message: 'แก้ไขที่อยู่สำเร็จ' }
        });
      } catch (error) {
        this.spinner.hide();
        setTimeout(() => {
          this.dataService.error('บันทึกที่อยู่ล้มเหลว');
        }, 3000);
      }
    }
    else {
      try {
        let response: any = await this.restApi.post(Constants.URL() + '/api/address', this.data);
        this.dialogRef.close(true);
        this.spinner.hide();
        this.dialog.open(ModalCompleteComponent, {
          width: '700px',
          data: { message: 'สร้างที่อยู่สำเร็จ' }
        });
      } catch (error) {
        this.spinner.hide();
        setTimeout(() => {
          this.dataService.error('สร้างที่อยู่ล้มเหลว');
        }, 3000);
      }
    }

  }

  async clickdelete(id) {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      width: '500px',
      data: { message: 'คุณต้องการลบที่อยู่หรือไม่?' }
    });
    dialogRef.afterClosed().subscribe(async result => {
      // console.log(`Dialog closed: ${result}`);
      const resultModal = result;
      if (resultModal === 'confirm') {
        this.spinner.show();
        try {
          await this.restApi.delete(Constants.URL() + '/api/address/' + id)
          this.dialogRef.close(true);
          this.spinner.hide();
          this.dialog.open(ModalCompleteComponent, {
            width: '700px',
            data: { message: 'ลบข้อมูลที่อยู่ของคุณสำเร็จ' }
          });
        } catch (error) {
          this.spinner.hide();
          this.dataService.error('ลบที่อยู่ไม่สำเร็จ');
        }
      }
    });

    // let conf = confirm("ยืนยันการลบที่อยู่");
    // if (conf) {
    //   try {
    //     await this.restApi.delete(Constants.URL() + '/api/address/' + id)
    //     this.dialogRef.close(true);
    //     this.dialog.open(ModalCompleteComponent, {
    //       width: '700px',
    //       data: { message: 'ลบข้อมูลที่อยู่ของคุณสำเร็จ' }
    //     });
    //   } catch (errer) {
    //     this.dataService.error('บันทึกที่อยู่ล้มเหลว');
    //   }
    // }
  }

  validateNumber() {
    let last = this.data.tel[this.data.tel.length - 1];
    if (isNaN(last)) {
      setTimeout(() => {
        this.data.tel = this.data.tel.slice(0, this.data.tel[this.data.tel.length - 1]);
      }, 0);
    }
  }

}
