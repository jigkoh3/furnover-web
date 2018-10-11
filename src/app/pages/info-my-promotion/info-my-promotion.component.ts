import { Constants } from 'src/app/app.constants';
import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { ModalSelectProductComponent } from '../modals/modal-select-product/modal-select-product.component';
import { MatDialog } from '@angular/material';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-my-promotion',
  templateUrl: './info-my-promotion.component.html',
  styleUrls: ['./info-my-promotion.component.css']
})
export class InfoMyPromotionComponent implements OnInit {
  data: any = {
    products: []
  };
  oldTime: any = {
    starttime: '00:00',
    endtime: '00:00'
  };
  itemId: any;
  // data: any = {
  //   _id: '1234',
  //   shop_id: '001',
  //   title: 'ลด 10%',
  //   start_date: '',
  //   start_time: '',
  //   end_date: '',
  //   end_time: '',
  //   products: [{
  //     product_id: '001',
  //     name: 'โต๊ะ',
  //     image: { url: '001.jpg' },
  //     prices: [{
  //       name: 'ปกติ',
  //       price: 100,
  //       newprice: 80,
  //       percentage: 20,
  //       isuse: true,
  //       stock: 5
  //     }],
  //     qty: 5
  //   }],
  //   status: 'soon'
  // };
  constructor(public dialog: MatDialog,
    private restApi: RestApiService,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        if (params['itemId']) {
          this.itemId = params['itemId'];
          this.initLoadData();
        }
      });
  }

  async initLoadData() {
    this.spinner.show();
    try {
      const res: any = await this.restApi.get(Constants.URL() + '/api/discount/' + this.itemId);
      this.data = res.data;
      // this.convertTime();
      this.spinner.hide();
    } catch (error) {
      console.log(error);
      this.spinner.hide();
    }
  }

  // convertTime() {
  //   if (this.data._id) {
  //     const _startdate = new Date(this.data.startdate);
  //     const _enddate = new Date(this.data.enddate);
  //     const st_time = new Date(this.data.startdate);
  //     const h1 = st_time.getHours();
  //     const m1 = st_time.getMinutes();
  //     const hh1 = h1 < 9 ? '0' + h1 : h1;
  //     const mm1 = m1 < 9 ? '0' + m1 : m1;

  //     const en_time = new Date(this.data.enddate);
  //     const h2 = en_time.getHours();
  //     const m2 = en_time.getMinutes();
  //     const hh2 = h2 < 9 ? '0' + h2 : h2;
  //     const mm2 = m2 < 9 ? '0' + m2 : m2;

  //     this.data.starttime = hh1 + ':' + mm1;
  //     this.data.endtime = hh2 + ':' + mm2;
  //     this.data._startdate = _startdate;
  //     this.data._enddate = _enddate;
  //   }
  // }

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
        console.log(this.data);
      }
    });
  }

  getDataHeader(e) {
    this.data = e;
  }

  getDataPromotionList(e) {
    this.data = e;
    console.log(this.data);
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
        console.log(res);
        this.data.starttime = this.oldTime.starttime;
        this.data.endtime = this.oldTime.endtime;
        this.spinner.hide();
        this.route.navigate(['my-promotion']);
      } catch (error) {
        console.log(error);
        this.data.starttime = this.oldTime.starttime;
        this.data.endtime = this.oldTime.endtime;
        this.spinner.hide();
      }
    } else {
      try {
        const res: any = await this.restApi.post(Constants.URL() + '/api/discount', this.data);
        console.log(res);
        this.data.starttime = this.oldTime.starttime;
        this.data.endtime = this.oldTime.endtime;
        this.spinner.hide();
        this.route.navigate(['my-promotion']);
      } catch (error) {
        console.log(error);
        this.data.starttime = this.oldTime.starttime;
        this.data.endtime = this.oldTime.endtime;
        this.spinner.hide();
      }
    }
  }

  async delete() {
    const confirm = window.confirm('ยืนยันการลบโปรโมชั่น');
    if (confirm) {
      this.spinner.show();
      try {
        const res: any = await this.restApi.delete(Constants.URL() + '/api/discount/' + this.itemId);
        console.log(res);
        this.spinner.hide();
        this.route.navigate(['my-promotion']);
      } catch (error) {
        console.log(error);
        this.spinner.hide();
      }
    }
  }

}
