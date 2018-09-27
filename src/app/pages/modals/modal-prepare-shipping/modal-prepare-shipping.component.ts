import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../../app.constants';
import { DataService } from '../../../providers/data-service/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-modal-prepare-shipping',
  templateUrl: './modal-prepare-shipping.component.html',
  styleUrls: ['./modal-prepare-shipping.component.css']
})
export class ModalPrepareShippingComponent implements OnInit {
  shopData: any = {};

  constructor(
    private restApi: RestApiService,
    private spinner: NgxSpinnerService,
    private dataService: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getShopData();
  }

  async getShopData (){
    this.spinner.show();
    try {
      let user: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
      let response : any = await this.restApi.get(Constants.URL() + '/api/shop/'+ user.shop_id);
      this.shopData = response.data;
      this.shopData.prepareshipping = this.shopData.prepareshipping || 0;
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.dataService.error('โหลดข้อมูลล้มเหลว');
    }
  }

  async savePrepareShipping(){
    this.spinner.show();
    try {
      let request = {
        shop_id: this.shopData._id,
        prepareshipping : this.shopData.prepareshipping
      };
      let response = await this.restApi.post(Constants.URL() + '/api/save-shop-prepare-shipping', request);
      this.spinner.hide();
      this.dialog.closeAll();
    } catch (error) {
      this.spinner.hide();
      setTimeout(() => {
        this.dataService.error('บันทึกข้อมูลล้มเหลว');
      }, 3000);
    }
  }

}
