import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Constants } from '../../app.constants';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { DataService } from '../../providers/data-service/data.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileSettingComponent implements OnInit {
  shop: any = {
    images: [],
    logistics: []
  };
  shopUser: any = {
    roles: [],
    shop: {
      images: [],
      logistics: []
    }
  };
  constructor(
    public dialog: MatDialog,
    public restApi: RestApiService,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  async getProfile() {
    this.shopUser = window.localStorage.getItem(Constants.URL() + '@usershop') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;
    try {
      let data: any = await this.restApi.get(Constants.URL() + '/api/shop/' + this.shopUser.shop_id);
      this.shop = data.data;
      console.log(this.shop);
    } catch (error) {
      this.dataService.error("โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }

  async submit() {
    this.shopUser = window.localStorage.getItem(Constants.URL() + '@usershop') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;
    try {
      let data: any = await this.restApi.put(Constants.URL() + '/api/shop/' + this.shopUser.shop_id, this.shop);
      console.log(data);
      // this.shop = data.data;
      // console.log(this.shop);
      if (data['status'] === 200) {
        this.dataService.success('บันทึกข้อมูลสำเร็จ');
        setTimeout(() => {
          this.dataService.success('');
        }, 2000);
      }
    } catch (error) {
      this.dataService.error("บันทึกข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }


}
