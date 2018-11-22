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
  name: any;
  gender: any;
  birthday: any;
  _birthday: any;
  email: any;
  tel: any;


  constructor(
    private restApi: RestApiService
  ) { }

  ngOnInit() {
    this.getData();
  }

  clickShow1() {
    if (this.show1) {
      this.show1 = false;
      this.getData();
    } else {
      this.show1 = true;
      this.getData();
    }

    console.log(this.data);
  }
  clickShow2() {
    if (this.show2) {
      this.show2 = false;
      this.getData();
    } else {
      this.show2 = true;
      this.getData();
    }
  }
  clickShow3() {
    if (this.show3) {
      this.show3 = false;
      this.getData();
    } else {
      this.show3 = true;
      this.getData();
    }
  }

  getData() {
    const usershop = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
    this.data = usershop;
    this.name = usershop.displayname;
    this.gender = usershop.sex;
    this._birthday = new Date(this.data.birthday);
    this.birthday = new Date(this.data.birthday);
    this.tel = usershop.tel;
    this.email = usershop.email;
    console.log(this.data);
  }

  getBirthday(e) {
    if (e) {
      const date = new Date(
        e._i.year, e._i.month, e._i.date
      );
      this.birthday = date;
    } else {
      this._birthday = new Date(this.data.birthday);
    }
  }

  async saveData() {
    try {
      this.data.displayname = this.name;
      this.data.sex = this.gender;
      this.data.birthday = this.birthday;
      this.data.tel = this.tel;
      this.data.email = this.email;
      const res: any = await this.restApi.put(Constants.URL() + '/api/user/' + this.data._id, this.data);
      this.data = res.data;
      console.log(res);
      await window.localStorage.setItem(Constants.URL() + '@token', res.token);
      await window.localStorage.setItem(Constants.URL() + '@usershop', JSON.stringify(this.data));
      this.clickShow1();
    } catch (error) {
      throw error;
    }

  }

  async saveTel() {
    try {
      const res: any = await this.restApi.put(Constants.URL() + '/api/user/' + this.data._id, this.data);
      this.data = res.data;
      console.log(res);
      await window.localStorage.setItem(Constants.URL() + '@token', res.token);
      await window.localStorage.setItem(Constants.URL() + '@usershop', JSON.stringify(this.data));
      this.clickShow2();
    } catch (error) {
      throw error;
    }
  }

  async saveEmail() {
    try {
      const res: any = await this.restApi.put(Constants.URL() + '/api/user/' + this.data._id, this.data);
      this.data = res.data;
      console.log(res);
      await window.localStorage.setItem(Constants.URL() + '@token', res.token);
      await window.localStorage.setItem(Constants.URL() + '@usershop', JSON.stringify(this.data));
      this.clickShow3();
    } catch (error) {
      throw error;
    }
  }


}
