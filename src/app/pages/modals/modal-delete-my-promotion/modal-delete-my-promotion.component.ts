import { Component, OnInit, Inject } from '@angular/core';
import { RestApiService } from '../../../providers/rest-api-service/rest-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../../../providers/data-service/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Constants } from '../../../app.constants';

@Component({
  selector: 'app-modal-delete-my-promotion',
  templateUrl: './modal-delete-my-promotion.component.html',
  styleUrls: ['./modal-delete-my-promotion.component.scss']
})
export class ModalDeleteMyPromotionComponent implements OnInit {
  data: any = {}
  constructor(
    private restApi: RestApiService,
    private spinner: NgxSpinnerService,
    private dataService: DataService,
    public dialogRef: MatDialogRef<ModalDeleteMyPromotionComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any
  ) {

    this.data = item;
    console.log(this.data)
  }

  ngOnInit() {
  }
  async delete() {
    this.spinner.show();
    try {
      let res: any = await this.restApi.post(Constants.URL() + '/api/xxx-delete/', this.data);
      if (res['status'] === 200) {
        this.dialogRef.close(res);
        this.spinner.hide();
      }
    } catch (errer) {
      this.spinner.hide();
      this.dataService.error('ลบโปรโมชั่นล้มเหลว กรุณาลองอีกครั้ง');
      setTimeout(() => {
        this.dataService.error('');
      }, 2000);
    }
  }
}
