import { Component, OnInit } from '@angular/core';
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
  selector: 'app-my-promotion-header',
  templateUrl: './my-promotion-header.component.html',
  styleUrls: ['./my-promotion-header.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class MyPromotionHeaderComponent implements OnInit {
  date = new Date();

  constructor(

  ) {
    console.log(this.date);
  }

  ngOnInit() {
    this.getDataTest();
  }

  getStartDate(e) {
    console.log(e._i);
  }

  getDataTest() {
    let res = {
      status: "200",
      data: {
        title: "เทสส่วนลด",
        start_date: "1/5/16",
        end_date: "1/5/16",
        start_time: "9:05 AM",
        end_time: "9:05 PM"
      }
    }
  }

}
