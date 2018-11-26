import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { DataService } from '../../providers/data-service/data.service';
import { Constants } from '../../app.constants';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-my-code',
  templateUrl: './my-code.component.html',
  styleUrls: ['./my-code.component.scss']
})
export class MyCodeComponent implements OnInit {

  data: any = {
    code: [],
    status: [],
    tabs: []
  };

  statusArray: any = [];

  status: any = 'all';
  tabs: any = [];
  pageData: any = {
    shop_id: "",
    status: "",
    page: 1,
    limit: 30
  };

  constructor(
    public route: Router,
    public restApi: RestApiService,
    public dataService: DataService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getStatus();
  }

  async getStatus() {
    this.spinner.show();
    let shop = window.localStorage.getItem(Constants.URL() + '@usershop') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;
    let objectData = {
      shop_id: shop.shop_id,
      status: this.status,
      page: this.pageData.page,
      limit: this.pageData.limit
    };
    try {
      let res: any = await this.restApi.post(Constants.URL() + '/api/my-code', objectData);
      if (res['status'] === 200) {
        this.statusArray = res.data.status;
        console.log(res.data);
        // if (this.statusArray || this.statusArray.length === 0) {
        //   this.statusArray = [{ name: 'ทั้งหมด' }, { name: 'ตั้งเวลาล่วงหน้า' }, { name: 'อยู่ระหว่างการโฆษณา' }, { name: 'สิ้นสุดแล้ว' }];
        // }
        this.spinner.hide();
        this.getCode();
      }
    } catch (error) {
      this.spinner.hide();
      this.dataService.error("โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }

  onCreateCode() {
    this.route.navigate(['/info-my-code']);
  }

  onLinkClick(event) {
    this.pageData.page = 1;
    if (this.statusArray && this.statusArray.length > 0) {
      this.status = this.statusArray[event.index].status;
    }
    console.log(this.status);
    this.getCode();
  }

  async getCode() {
    this.dataService.warning('');
    this.spinner.show();
    let shop = window.localStorage.getItem(Constants.URL() + '@usershop') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;
    let objectData = {
      shop_id: shop.shop_id,
      status: this.status,
      page: this.pageData.page,
      limit: this.pageData.limit
    };
    // console.log(objectData);
    try {
      let res: any = await this.restApi.post(Constants.URL() + '/api/my-code', objectData);
      if (res['status'] === 200) {
        this.data = res.data;
        this.tabs = this.data.tabs;
        console.log(this.data);
        this.spinner.hide();
        if (this.data && this.data.codes.length === 0) {
          this.dataService.warning('ไม่พบข้อมูลส่วนลด');
        }
      }
    } catch (error) {
      this.spinner.hide();
      this.dataService.error("โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }

  onDetail(item) {
    console.log(item);
    this.route.navigate(['/info-my-code'], { queryParams: { item: item._id} });
  }

  previos() {
    this.pageData.page--;
    this.getCode();
  }

  page(item) {
    if (this.pageData.page !== item) {
      this.pageData.page = item;
      this.getCode();
    }
  }

  next() {
    this.pageData.page++;
    this.getCode();
  }

}
