import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { MatDialog, MatIconRegistry } from '@angular/material';
import { ModalSelectProductComponent } from '../modals/modal-select-product/modal-select-product.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { Constants } from 'src/app/app.constants';
import { DataService } from 'src/app/providers/data-service/data.service';
import { DomSanitizer } from '@angular/platform-browser';
const moment = _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-info-my-code',
  templateUrl: './info-my-code.component.html',
  styleUrls: ['./info-my-code.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class InfoMyCodeComponent implements OnInit {

  data: any = {
    cash: {
      discount: null,
      minprice: null,
    },
    percentage: {
      discount: null,
      percentagetype: 'limit', // มีสองอย่าง limit กับ unlimit
      setamount: null,
      minprice: null
    },
    products: []
  };
  date = new Date();
  _startdate: any;
  _enddate: any;
  itemId: any;
  _itemtype = false;
  userShop: any = {};
  prefixUppercase: String = 'CODE';
  status: any;

  constructor(
    public dialog: MatDialog,
    private restApi: RestApiService,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    public dataService: DataService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'del',
      sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/icons/del.svg'));
    iconRegistry.addSvgIcon(
      'drag',
      sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/icons/drag.svg'));
  }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        if (params['item']) {
          this.itemId = params['item'];
          this.initLoadData();
        }
        if (params['status']) {
          this.status = params['status'];
          console.log(this.status);
        }
      });
    const userShop: any = window.localStorage.getItem(Constants.URL() + '@usershop')
      ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : {};
    this.userShop = userShop;
    let uppercase: String = this.userShop.username.toUpperCase();
    uppercase = uppercase.length >= 4 ? uppercase.substring(0, 4) : uppercase;
    this.prefixUppercase = uppercase;
    // console.log(this.prefixUppercase);
  }

  checkCode() {
    const txtRexg: any = this.data.code.replace(/[&\/\\#,+()$~%.'":*?<>^{}\W_]/g, '');
    setTimeout(() => {
      this.data.code = txtRexg;
      this.data.code = txtRexg.toUpperCase();
    }, 80);
  }

  async initLoadData() {
    this.spinner.show();
    try {
      const res: any = await this.restApi.get(Constants.URL() + '/api/mycode/' + this.itemId);
      console.log(res);
      if (res.data._id) {
        this.data = res.data;
        this.data.cash = this.data.cash || {};
        this.data.percentage = this.data.percentage || {};
        this._startdate = new Date(this.data.startdate);
        this._enddate = new Date(this.data.enddate);
        if (this.data.itemtype === 'all') {
          this._itemtype = true;
        } else {
          this._itemtype = false;
        }
        this.data.code = this.data.code.replace(this.prefixUppercase, '');
        // console.log(this.data);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.dataService.error('เรียกข้อมูลไม่สำเร็จ');
    }
  }

  isChecked(e) {
    console.log(e);
    if (e === true) {
      this.data.itemtype = 'all';
      // console.log(this.data.itemtype);
    } else {
      this.data.itemtype = 'item';
      // console.log(this.data.itemtype);
    }
  }

  startDate(e) {
    const date = new Date(
      e._i.year, e._i.month, e._i.date
    );
    this.data.startdate = date;
    // console.log(this.data.start_date);
  }

  endDate(e) {
    const date = new Date(
      e._i.year, e._i.month, e._i.date
    );
    this.data.enddate = date;
    // console.log(this.data.end_date);
  }

  saveDate() {
    console.log(this.data);
  }

  openModalAddProduct() {
    const dialogRef = this.dialog.open(ModalSelectProductComponent, {
      width: '95vw',
      height: '90vh',
      data: { products: this.data.products.length > 0 ? this.data.products : [], status: 'sell' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.forEach(item => {
          const index = this.data.products.findIndex(findindex => {
            return findindex._id === item._id;
          });
          if (index === -1 || this.data.products.length === 0) {
            this.data.products.push(item);
          }
        });
      }
    });
  }


  async saveData() {
    this.spinner.show();
    const userShop: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
    this.data.shop_id = userShop.shop._id;
    this.data.itemtype = this._itemtype ? 'all' : 'item';
    this.checkCode();
    this.data.code = this.prefixUppercase + this.data.code;
    this.data.products = this._itemtype ? [] : this.data.products;
    this.data.percentage.setamount = this.data.percentage.percentagetype === 'unlimit' ? null : this.data.percentage.setamount;

    if (this.itemId) {
      try {
        const res: any = await this.restApi.put(Constants.URL() + '/api/mycode/' + this.itemId, this.data);
        this.spinner.hide();
        this.route.navigate(['my-code']);
        console.log(this.data);

      } catch (error) {
        this.spinner.hide();
        if (error) {
          if (error['error']['message'] === 'Code already exists') {
            return this.dataService.error('โค้ดส่วนลดนี้มีข้อมูลแล้ว');
          } else if (error['error']['message'] === 'Please fill in a code name') {
            return this.dataService.error('กรุณาระบุข้อมูลชื่อส่วนลด');
          } else if (error['error']['message'] === 'Please fill in a code') {
            return this.dataService.error('กรุณาระบุข้อมูลโค้ดส่วนลด');
          } else if (error['error']['message'] === 'Please fill in a codetype') {
            return this.dataService.error('กรุณาระบุประเภทส่วนลด');
          } else if (error['error']['message'] === 'Please fill in a startdate') {
            return this.dataService.error('กรุณาระบุวันที่เริ่มต้น');
          } else if (error['error']['message'] === 'Please fill in a enddate') {
            return this.dataService.error('กรุณาระบุวันที่สิ้นสุด');
          } else if (error['error']['message'] === 'Please fill in a itemtype') {
            return this.dataService.error('กรุณาระบุประเภทการลดของสินค้า');
          } else if (error['error']['message'] === 'Please fill in a codeqty') {
            return this.dataService.error('กรุณาระบุจำนวนการใช้งานโค้ดส่วนลด');
          }
        }
        return this.dataService.error('บันทึกข้อมูลไม่สำเร็จ');
      }
    } else {
      try {
        const res: any = await this.restApi.post(Constants.URL() + '/api/mycode', this.data);
        this.spinner.hide();
        this.route.navigate(['my-code']);
        console.log(this.data);
      } catch (error) {
        this.spinner.hide();
        if (error) {
          if (error['error']['message'] === 'Code already exists') {
            return this.dataService.error('โค้ดส่วนลดนี้มีข้อมูลแล้ว');
          } else if (error['error']['message'] === 'Please fill in a code name') {
            return this.dataService.error('กรุณาระบุข้อมูลชื่อส่วนลด');
          } else if (error['error']['message'] === 'Please fill in a code') {
            return this.dataService.error('กรุณาระบุข้อมูลโค้ดส่วนลด');
          } else if (error['error']['message'] === 'Please fill in a codetype') {
            return this.dataService.error('กรุณาระบุประเภทส่วนลด');
          } else if (error['error']['message'] === 'Please fill in a startdate') {
            return this.dataService.error('กรุณาระบุวันที่เริ่มต้น');
          } else if (error['error']['message'] === 'Please fill in a enddate') {
            return this.dataService.error('กรุณาระบุวันที่สิ้นสุด');
          } else if (error['error']['message'] === 'Please fill in a itemtype') {
            return this.dataService.error('กรุณาระบุประเภทการลดของสินค้า');
          } else if (error['error']['message'] === 'Please fill in a codeqty') {
            return this.dataService.error('กรุณาระบุจำนวนการใช้งานโค้ดส่วนลด');
          }
        }
        return this.dataService.error('บันทึกข้อมูลไม่สำเร็จ');
      }
    }
  }

  delProd(item) {
    console.log(item);
    console.log(this.data.products)
    const index = this.data.products.findIndex((itm) => {
      return itm._id.toString() === item._id.toString();
    });
    console.log(index);
    if (index >= 0) {
      this.data.products.splice(index, 1);
    }

  }

  clickCancel() {
    this.route.navigate(['my-code']);
  }

  async cancelCode() {
    this.spinner.show();
    const data = {
      status: 'end'
    }
    try {
      this.restApi.put(Constants.URL() + '/api/mycode/' + this.data._id, data)
      this.spinner.hide();
      this.route.navigate(['my-code']);
    } catch (error) {
      this.spinner.hide();
      this.dataService.error('ยกเลิกโค้ดส่วนลดไม่สำเร็จ');
    }
  }


  async deleteCode() {
    const conf = confirm('ยืนยันการลบที่อยู่');
    if (conf) {
      this.spinner.show();
      try {
        await this.restApi.delete(Constants.URL() + '/api/mycode/' + this.data._id);
        this.spinner.hide();
        this.route.navigate(['my-code']);
        // console.log(this.modelData)
      } catch (error) {
        this.spinner.hide();
        this.dataService.error('ลบข้อมูลไม่สำเร็จ');

      }
    }
  }


  validateNumber() {
    // ใช้เช็คการกรอกตัวเลขในช่่อง
    const last = this.data.cash.discount[this.data.cash.discount.length - 1];
    if (isNaN(last)) {
      setTimeout(() => {
        this.data.cash.discount = this.data.cash.discount.slice(0, this.data.cash.discount[this.data.cash.discount.length - 1]);
      }, 0);
    }
  }


  checkNumPercen(e) {
    const reg = new RegExp('^[0-9]+$');
    if (e < 0 || !reg.test(e)) {
      setTimeout(() => {
        this.data.percentage.discount = '';
      }, 100);
    }
  }

  checkNumCash(e) {
    const reg = new RegExp('^[0-9]+$');
    if (e < 0 || !reg.test(e)) {
      setTimeout(() => {
        this.data.cash.discount = '';
      }, 100);
    }
  }


  checkNumCashMin(e) {
    const reg = new RegExp('^[0-9]+$');
    if (e < 0 || !reg.test(e)) {
      setTimeout(() => {
        this.data.cash.minprice = '';
      }, 100);
    }
  }

  checkNumPerMin(e) {
    const reg = new RegExp('^[0-9]+$');
    if (e < 0 || !reg.test(e)) {
      setTimeout(() => {
        this.data.percentage.minprice = '';
      }, 100);
    }
  }

  checkNumQty(e) {
    const reg = new RegExp('^[0-9]+$');
    if (e < 0 || !reg.test(e)) {
      setTimeout(() => {
        this.data.codeqty = '';
      }, 100);
    }
  }

  checkNumMax(e) {
    const reg = new RegExp('^[0-9]+$');
    if (e < 0 || !reg.test(e)) {
      setTimeout(() => {
        this.data.percentage.setamount = '';
      }, 100);
    }
  }









}
