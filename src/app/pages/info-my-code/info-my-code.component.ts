import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
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
    }
  };
  date = new Date();
  _startdate: any;
  _enddate: any;

  constructor() { }

  ngOnInit() {
    this.getDataTest();
    // console.log(this.data);
  }

  getDataTest() {
    
    //this.data = res.data;
  }
  isChecked(){
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

}
