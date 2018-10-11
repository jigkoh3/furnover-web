import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { MatDialog } from '@angular/material';
import { ModalSelectProductComponent } from '../modals/modal-select-product/modal-select-product.component';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { Constants } from 'src/app/app.constants';
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
  styleUrls: ['./info-my-code.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class InfoMyCodeComponent implements OnInit {

  data: any = {

    cash: {
      discount: 0,
      minprice: 0,
    },
    percentage: {
      discount: 0,
      percentagetype: "limit", // มีสองอย่าง limit กับ unlimit
      setamount: 0,
      minprice: 0
    },
    products: []
  };
  date = new Date();
  _startdate: any;
  _enddate: any;
  itemId: any;

  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private restApi: RestApiService
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
      const res: any = await this.restApi.get(Constants.URL() + '/api/mycode/' + this.itemId);
      if(res.data._id){
        this.data = res.data;
      }
      
      this.spinner.hide();
    } catch (error) {
      console.log(error);
      this.spinner.hide();
    }
  }

  isChecked() {
    return this.data.itemtype == 'all';
  }
  startDate(e) {
    const date = new Date(
      e._i.year, e._i.month, e._i.date
    );
    this.data.start_date = date;
    // console.log(this.data.start_date);
  }

  endDate(e) {
    const date = new Date(
      e._i.year, e._i.month, e._i.date
    );
    this.data.end_date = date;
    // console.log(this.data.end_date);
  }

  saveDate() {
    console.log(this.data)
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
    // this.oldTime = {
    //   starttime: this.data.starttime,
    //   endtime: this.data.endtime
    // };
    // const dateTimeStart = new Date(this.data.startdate);
    // const timespl = this.data.starttime.split(':');
    // dateTimeStart.setHours(timespl[0], timespl[1], 0, 0);
    // const dateTimeEnd = new Date(this.data.enddate);
    // const timespl2 = this.data.endtime.split(':');
    // dateTimeEnd.setHours(timespl2[0], timespl2[1], 0, 0);
    // this.data.startdate = dateTimeStart;
    // this.data.enddate = dateTimeEnd;
    // this.data.starttime = dateTimeStart;
    // this.data.endtime = dateTimeEnd;
    const userShop: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
    this.data.shop_id = userShop.shop._id;

    if (this.itemId) {
      try {
        const res: any = await this.restApi.put(Constants.URL() + '/api/Mycode/' + this.itemId, this.data);
        
        this.spinner.hide();
        
      } catch (error) {
        console.log(error);
        
        this.spinner.hide();
      }
    } else {
      try {
        const res: any = await this.restApi.post(Constants.URL() + '/api/Mycode', this.data);
       
        this.spinner.hide();
        
      } catch (error) {
        console.log(error);
       
        this.spinner.hide();
      }
    }
  }

}
