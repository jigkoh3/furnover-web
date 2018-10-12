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
  isEdit = false;
  _startdate: any;
  _enddate: any;
  isSave = false;
  // data :any = {
  //   title: '',
  //   start_date:'',
  //   end_date:'',
  //   start_time:'',
  //   end_time: ''
  // };
  @Input() data: any = {};
  @Output() outputData = new EventEmitter();

  constructor(

  ) {

  }

  ngOnInit() {
    setTimeout(() => {
      if (this.data._id) {
        this._startdate = new Date(this.data.startdate);
        this._enddate = new Date(this.data.enddate);
        const st_time = new Date(this.data.startdate);
        const h1 = st_time.getHours();
        const m1 = st_time.getMinutes();
        const hh1 = h1 < 9 ? '0' + h1 : h1;
        const mm1 = m1 < 9 ? '0' + m1 : m1;

        const en_time = new Date(this.data.enddate);
        const h2 = en_time.getHours();
        const m2 = en_time.getMinutes();
        const hh2 = h2 < 9 ? '0' + h2 : h2;
        const mm2 = m2 < 9 ? '0' + m2 : m2;

        this.data.starttime = hh1 + ':' + mm1;
        this.data.endtime = hh2 + ':' + mm2;
        this.isSave = true;
        this.data.isSave = this.isSave;
        this.outputData.emit(this.data);
      }
    }, 1600);
  }

  sendData() {
    this.isSave = true;
    this.data.isSave = this.isSave;
    this.outputData.emit(this.data);
  }

  startDate(e) {
    const date = new Date(
      e._i.year, e._i.month, e._i.date
    );
    this.data.startdate = date;
  }
  endDate(e) {
    const date = new Date(
      e._i.year, e._i.month, e._i.date
    );
    this.data.enddate = date;
  }

}
