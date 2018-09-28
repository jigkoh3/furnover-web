import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../../app.constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';
import { DataService } from '../../../providers/data-service/data.service';
import { ModalCompleteComponent } from '../modal-complete/modal-complete.component';

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
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  async clickSave() {
    this.spinner.show();
    try {
      let response: any = await this.restApi.post(Constants.URL() + '/api/address', this.data);
      this.spinner.hide();
      this.dialog.closeAll();
      this.dialog.open(ModalCompleteComponent, {
        width: '700px',
        data: {message: 'บันทึกสินค้าสำเร็จ'}
      });
    } catch (error) {
      this.spinner.hide();
      setTimeout(() => {
        this.dataService.error('บันทึกที่อยู่ล้มเหลว');
      }, 3000);
    }
  }

}
