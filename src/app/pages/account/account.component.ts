import { Constants } from './../../app.constants';
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
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class AccountComponent implements OnInit {

  data: any = {};
  date = new Date();
  show1 = false;
  show2 = false;
  show3 = false;


  constructor() { }

  ngOnInit() {
    this.getData();
  }

  clickShow1() {
    if (this.show1) {
      this.show1 = false;
    } else {
      this.show1 = true;
    }
  }
  clickShow2() {
    if (this.show2) {
      this.show2 = false;
    } else {
      this.show2 = true;
    }
  }
  clickShow3() {
    if (this.show3) {
      this.show3 = false;
    } else {
      this.show3 = true;
    }
  }
  getData() {
    const usershop = window.localStorage.getItem(Constants.URL() + '@usershop') ?
      JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : {};
    console.log(usershop);

    this.data = usershop;
  }
}
