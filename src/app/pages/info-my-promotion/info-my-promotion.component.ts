import { DataService } from './../../providers/data-service/data.service';
import { Constants } from 'src/app/app.constants';
import { Component, OnInit } from '@angular/core';
import { ModalSelectProductComponent } from '../modals/modal-select-product/modal-select-product.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalConfirmComponent } from '../modals/modal-confirm/modal-confirm.component';
import { ModalCompleteComponent } from '../modals/modal-complete/modal-complete.component';

@Component({
  selector: 'app-info-my-promotion',
  templateUrl: './info-my-promotion.component.html',
  styleUrls: ['./info-my-promotion.component.css']
})
export class InfoMyPromotionComponent implements OnInit {
  checkPrice = false;
  data: any = {
    products: []
  };
  oldTime: any = {
    starttime: '00:00',
    endtime: '00:00'
  };
  itemId: any;
  itemStatus: any;
  dateLimited: any;

  constructor(public dialog: MatDialog,
    private restApi: RestApiService,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    public dataService: DataService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        if (params['itemId']) {
          this.itemId = params['itemId'];
          this.data._id = this.itemId;
          this.initLoadData();
        }
      });
  }

  async initLoadData() {
    this.spinner.show();
    try {
      const res: any = await this.restApi.get(Constants.URL() + '/api/discount/' + this.itemId);
      this.data = res.data;
      console.log(this.data);
      this.itemStatus = res.data.flag;
      this.spinner.hide();
    } catch (error) {
      console.log(error);
      this.spinner.hide();
    }
    this.dateLimit();

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
          console.log(item);
          const index = this.data.products.findIndex(findindex => {
            return findindex._id === item._id;
          });
          if (index === -1 || this.data.products.length === 0) {
            this.data.products.push(item);
          }
        });

        this.data.products.forEach(item => {
          item.prices.forEach(price => {
            if (price.isuse === undefined) {
              price.isuse = true;
            }
          });
          // }
        });
      }
    });
  }

  getDataHeader(e) {
    this.data = e;
  }

  getDataPromotionList(e) {
    this.data = e;
    this.validatePrice();
    console.log(this.data);
  }

  validatePrice() {
    this.data.products.forEach(product => {
      product.prices.forEach(price => {
        if (!price.newprice && !price.percentage && !product.qty) {
          this.checkPrice = false;
        } else {
          this.checkPrice = true;
        }
      });
    });
  }


  async save() {
        this.spinner.show();
        this.oldTime = {
          starttime: this.data.starttime,
          endtime: this.data.endtime
        };
        const dateTimeStart = new Date(this.data.startdate);
        const timespl = this.data.starttime.split(':');
        dateTimeStart.setHours(timespl[0], timespl[1], 0, 0);
        const dateTimeEnd = new Date(this.data.enddate);
        const timespl2 = this.data.endtime.split(':');
        dateTimeEnd.setHours(timespl2[0], timespl2[1], 0, 0);
        this.data.startdate = dateTimeStart;
        this.data.enddate = dateTimeEnd;
        this.data.starttime = dateTimeStart;
        this.data.endtime = dateTimeEnd;
        const userShop: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
        this.data.shop_id = userShop.shop._id;
    
        if (this.itemId) {
          try {
            const res: any = await this.restApi.put(Constants.URL() + '/api/discount/' + this.itemId, this.data);
            console.log(res)
            this.data.starttime = this.oldTime.starttime;
            this.data.endtime = this.oldTime.endtime;
            this.spinner.hide();
            this.route.navigate(['my-promotion']);
            this.spinner.hide();
            this.dialog.open(ModalCompleteComponent, {
              width: '700px',
              data: { message: 'บันทึกข้อมูลโปรโมชั่นสำเร็จ' }
            });
          } catch (error) {
            if (error['error']['message'] === 'Please fill in a title') {
              return this.dataService.error('กรุณาระบุข้อมูลชื่อโปรโมชั่น');
            } else if (error['error']['message'] === 'Please fill in a startdate') {
              return this.dataService.error('กรุณาระบุวันที่เริ่มต้น');
            } else if (error['error']['message'] === 'Please fill in a starttime') {
              return this.dataService.error('กรุณาระบุเวลาเริ่มต้น');
            } else if (error['error']['message'] === 'Please fill in a enddate') {
              return this.dataService.error('กรุณาระบุวันที่สิ้นสุด');
            } else if (error['error']['message'] === 'Please fill in a endtime') {
              return this.dataService.error('กรุณาระบุเวลาสิ้นสุด');
            }
            this.data.starttime = this.oldTime.starttime;
            this.data.endtime = this.oldTime.endtime;
            this.spinner.hide();
          }
          return this.dataService.error('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    
        } else {
          try {
            const res: any = await this.restApi.post(Constants.URL() + '/api/discount', this.data);
            this.data.starttime = this.oldTime.starttime;
            this.data.endtime = this.oldTime.endtime;
            this.spinner.hide();
            this.route.navigate(['my-promotion']);
            this.spinner.hide();
            this.dialog.open(ModalCompleteComponent, {
              width: '700px',
              data: { message: 'สร้างโปรโมชั่นสำเร็จ' }
            });
          } catch (error) {
            if (error['error']['message'] === 'Please fill in a title') {
              return this.dataService.error('กรุณาระบุข้อมูลชื่อโปรโมชั่น');
            } else if (error['error']['message'] === 'Please fill in a startdate') {
              return this.dataService.error('กรุณาระบุวันที่เริ่มต้น');
            } else if (error['error']['message'] === 'Please fill in a starttime') {
              return this.dataService.error('กรุณาระบุเวลาเริ่มต้น');
            } else if (error['error']['message'] === 'Please fill in a enddate') {
              return this.dataService.error('กรุณาระบุวันที่สิ้นสุด');
            } else if (error['error']['message'] === 'Please fill in a endtime') {
              return this.dataService.error('กรุณาระบุเวลาสิ้นสุด');
            }
            this.data.starttime = this.oldTime.starttime;
            this.data.endtime = this.oldTime.endtime;
            this.spinner.hide();
          }
          return this.dataService.error('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    
        }
}


  delete(): void {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      width: '500px',
      data: { message: 'ยืนยันการลบโปรโมชั่น' }
    });

    dialogRef.afterClosed().subscribe(async result => {
      console.log(`Dialog closed: ${result}`);
      const deleteCat = result;
      if (deleteCat === 'confirm') {
        this.spinner.show();
        try {
          const res: any = await this.restApi.delete(Constants.URL() + '/api/discount/' + this.itemId);
          this.spinner.hide();
          this.dialog.open(ModalCompleteComponent, {
            width: '700px',
            data: { message: 'การลบโปรโมชั่นสำเร็จ' }
          });
          this.route.navigate(['my-promotion']);
        } catch (error) {
          console.log(error);
          this.spinner.hide();
        }
      }
    });
  }

  async endNow() {
    this.spinner.show();
    this.data.status = 'end'
    this.data.products.forEach(products => {
      products.prices.forEach(prices => {

        if (prices) {
          prices.isuse = false;
        }

      });
    });
    console.log(this.data);

    try {
      const res: any = await this.restApi.put(Constants.URL() + '/api/discount/' + this.itemId, this.data)
      this.spinner.hide();
      console.log(res)
    } catch (error) {
      this.spinner.hide();
      throw error;
    }
  }

  dateLimit() {
    const now: any = new Date();
    const createDate: any = new Date(this.data.created);
    const hours = Math.abs(now - createDate) / 36e5;
    console.log(hours);
    this.dateLimited = hours;
  }

  openPromotion() {
    this.route.navigate(['my-promotion']);
  }

}
