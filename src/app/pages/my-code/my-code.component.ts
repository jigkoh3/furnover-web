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
  status: string = 'all';
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
    this.getCode();
  }

  onCreateCode() {
    this.route.navigate(['/info-my-code']);
  }

  onLinkClick(event) {
    this.status = this.data.status[event.index].status;
    this.getCode();
  }

  async getCode() {
    this.spinner.show();
    let shop = window.localStorage.getItem(Constants.URL() + '@usershop') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;
    let object = {
      shop_id: shop.shop_id,
      status: this.status,
      page: this.pageData.page,
      limit: this.pageData.limit
    };
    console.log(object);
    try {
      let res: any = await this.restApi.post(Constants.URL() + '/api/my-code', object);
      if (res['status'] === 200) {

        this.data = res.data;
        this.tabs = this.data.tabs
        console.log(this.data);
        if (!this.data || !this.data.status) {
          this.data.status = [{ name: 'ทั้งหมด' }, { name: 'ตั้งเวลาล่วงหน้า' }, { name: 'อยู่ระหว่างการโฆษณา' }, { name: 'สิ้นสุดแล้ว' }];
        }
        if (this.data && this.data.codes.length === 0) {
          this.dataService.warning('ไม่พบข้อมูลส่วนลด');
        }
        this.spinner.hide();
      }
    } catch (error) {
      this.spinner.hide();
      this.dataService.error("โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }

  onDetail(item) {
    this.route.navigate(['/info-my-code'], { queryParams: { item: item._id } });
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
