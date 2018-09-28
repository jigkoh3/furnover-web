import { Component, OnInit, Inject } from '@angular/core';
import { RestApiService } from '../../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../../app.constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../../providers/data-service/data.service';
import { ModalCompleteComponent } from '../modal-complete/modal-complete.component';
import { DialogData } from '../modal-prepare-shipping/modal-prepare-shipping.component';


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
        this.spinner.hide();
        this.dialog.closeAll();
        this.dialog.open(ModalCompleteComponent, {
          width: '700px',
          data: { message: 'บันทึกสินค้าสำเร็จ' }
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
        this.spinner.hide();
        this.dialog.closeAll();
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

  }

}
