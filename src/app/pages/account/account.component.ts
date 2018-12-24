import { Constants } from './../../app.constants';
import { Component, OnInit } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { MatDialog } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalConfirmComponent } from '../modals/modal-confirm/modal-confirm.component';
import { ModalCompleteComponent } from '../modals/modal-complete/modal-complete.component';
import { DataService } from 'src/app/providers/data-service/data.service';
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
  surname: any;
  gender: any;
  birthday: any;
  _birthday: any;
  email: any;
  tel: any;
  isCheckEmail: any;
  currentDate: any = new Date();
  setDateTime = this.currentDate.setHours(0, 0, 0, 0);


  constructor(
    private restApi: RestApiService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public dataService: DataService
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
    const usershop = JSON.parse(window.localStorage.getItem(Constants.URL() + '@user'));
    this.data = usershop;
    this.name = usershop.firstname;
    this.surname = usershop.lastname
    this.gender = usershop.sex;
    this.tel = usershop.tel;
    this.email = usershop.email;
    this._birthday = new Date(this.data.birthday);
    this.birthday = new Date(this.data.birthday);
    // console.log(this.data);
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
      this.data.firstname = this.name;
      this.data.lastname = this.surname;
      this.data.sex = this.gender;
      this.data.birthday = this.birthday;
      const res: any = await this.restApi.put(Constants.URL() + '/api/user/' + this.data._id, this.data);
      this.data = res.data;
      // console.log(res);
      await window.localStorage.setItem(Constants.URL() + '@token', res.token);
      await window.localStorage.setItem(Constants.URL() + '@user', JSON.stringify(this.data));
      this.clickShow1();
      this.dialog.open(ModalCompleteComponent, {
        width: '700px',
        data: { message: 'บันทึกข้อมูลของฉันสำเร็จ' }
      });
    } catch (error) {
      throw error;
    }

  }

  async saveTel() {
    try {
      this.data.tel = this.tel;
      const res: any = await this.restApi.put(Constants.URL() + '/api/user/' + this.data._id, this.data);
      this.data = res.data;
      // console.log(res);
      await window.localStorage.setItem(Constants.URL() + '@token', res.token);
      await window.localStorage.setItem(Constants.URL() + '@user', JSON.stringify(this.data));
      this.clickShow2();
      this.dialog.open(ModalCompleteComponent, {
        width: '700px',
        data: { message: 'บันทึกเบอร์โทรศัพท์สำเร็จ' }
      });
    } catch (error) {
      throw error;
    }
  }

  async saveEmail() {
    try {
      this.data.email = this.email;
      const res: any = await this.restApi.put(Constants.URL() + '/api/user/' + this.data._id, this.data);
      this.data = res.data;
      // console.log(res);
      await window.localStorage.setItem(Constants.URL() + '@token', res.token);
      await window.localStorage.setItem(Constants.URL() + '@user', JSON.stringify(this.data));
      this.clickShow3();
      this.dialog.open(ModalCompleteComponent, {
        width: '700px',
        data: { message: 'บันทึกอีเมล์สำเร็จ' }
      });
    } catch (error) {
      throw error;
    }
  }

  onNumber(e) {
    // let regEx = new RegExp(/^[0-9 ()+-]+$/);
    let regEx = new RegExp(/^[0-9]+$/);
    if (!(regEx.test(e.key) || e.key === 'Backspace' || e.keyCode === 8) || this.tel.length > 12) {
      this.tel = this.tel.substring(0, this.tel.length - 1);
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log(re.test(String(email).toLowerCase()));
    this.isCheckEmail = re.test(String(email).toLowerCase());
  }


}
