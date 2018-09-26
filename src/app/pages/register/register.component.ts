import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { DataService } from '../../providers/data-service/data.service';
import { Constants } from '../../app.constants';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  credentials: any = {};
  isLinear = true; // set true for required field
  accountFormGroup: FormGroup;
  shopFormGroup: FormGroup;
  profileFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private restApi: RestApiService,
    private dataService: DataService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.accountFormGroup = this._formBuilder.group({
      accountFormGroupUsername: ['', Validators.required],
      accountFormGroupPassword: ['', Validators.required]
    });
    this.profileFormGroup = this._formBuilder.group({
      profileFormGroupFirstname: ['', Validators.required],
      profileFormGroupLastname: ['', Validators.required],
      profileFormGroupEmail: ['', [Validators.required, Validators.email]]
    });
    this.shopFormGroup = this._formBuilder.group({
      shopFormGroupShopname: ['', [Validators.required]]
    });
  }

  async onRegisterShop() {
    this.spinner.show();
    try {
      this.dataService.success('');
      let response: any = await this.restApi.post(Constants.URL() + '/api/auth/signup-shop', this.credentials);
      window.localStorage.setItem(Constants.URL() + '@token', JSON.stringify(response.token));
      window.localStorage.setItem(Constants.URL() + '@usershop', JSON.stringify(response.data));
      this.router.navigate(['/home']);
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      if (error) {
        if (error['error']['message'] === 'Email already exists') {
          return this.dataService.error('อีเมล์นี้มีผู้ใช้งานแล้ว');
        } else if (error['error']['message'] === 'Please fill a valid email address') {
          return this.dataService.error('อีเมล์ไม่ถูกต้อง');
        } else if (error['error']['message'] === ' Username already exists') {
          return this.dataService.error('ชื่อผู้ใช้นี้มีผู้ใช้งานแล้ว');
        }
      }
      return this.dataService.error('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    }
  }

}
