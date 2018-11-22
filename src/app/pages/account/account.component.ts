import { Constants } from './../../app.constants';
import { Component, OnInit } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
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

  data: any = {
  };
  // date = '';
  show1 = false;
  show2 = false;
  show3 = false;
  gender: any;
  birthday: any;
  _birthday: any;


  constructor(
    private restApi: RestApiService
  ) { }

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
    let usershop = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
    this.data = usershop;
    this._birthday = new Date(this.data.birthday);
    this.gender = usershop.sex;
    console.log(this.data);
  }

  getBirthday(e) {
    if (e) {
      const date = new Date(
        e._i.year, e._i.month, e._i.date
      );
      this.birthday = date
    } else {
      this._birthday = new Date(this.data.birthday);
    }
  }

  async saveData() {
    try {
      this.data.sex = this.gender;
      this.data.birthday = this.birthday
      let res: any = await this.restApi.put(Constants.URL() + '/api/user/' + this.data._id, this.data);
      this.data = res.data;
      console.log(res);
      await window.localStorage.setItem(Constants.URL() + '@token', res.token);
      await window.localStorage.setItem(Constants.URL() + '@usershop', JSON.stringify(this.data));
      this.clickShow1();
    } catch (error) {
      throw (error);
    }

  }

  async saveTel() {
    try {
      let res: any = await this.restApi.put(Constants.URL() + '/api/user/' + this.data._id, this.data);
      this.data = res.data;
      console.log(res);
      await window.localStorage.setItem(Constants.URL() + '@token', res.token);
      await window.localStorage.setItem(Constants.URL() + '@usershop', JSON.stringify(this.data));
      this.clickShow2();;
    } catch (error) {
      throw (error);
    }
  }

  async saveEmail() {
    try {
      let res: any = await this.restApi.put(Constants.URL() + '/api/user/' + this.data._id, this.data);
      this.data = res.data;
      console.log(res);
      await window.localStorage.setItem(Constants.URL() + '@token', res.token);
      await window.localStorage.setItem(Constants.URL() + '@usershop', JSON.stringify(this.data));
      this.clickShow3();
    } catch (error) {
      throw (error);
    }
  }


}
