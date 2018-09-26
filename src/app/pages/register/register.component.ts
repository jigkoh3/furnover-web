import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { DataService } from '../../providers/data-service/data.service';
import { Constants } from '../../app.constants';
import { Router } from '@angular/router';


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

  constructor(
    private _formBuilder: FormBuilder,
    private restApi: RestApiService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.accountFormGroup = this._formBuilder.group({
      accountFormGroupUsername: ['', Validators.required],
      accountFormGroupPassword: ['', Validators.required],
      accountFormGroupFirstname: ['', Validators.required],
      accountFormGroupLastname: ['', Validators.required],
      accountFormGroupEmail: ['', [Validators.required, Validators.email]]
    });
    this.shopFormGroup = this._formBuilder.group({
      shopFormGroupShopname: ['', [Validators.required]]
    });
  }

  async onRegisterShop() {
    try {
      let response: any = await this.restApi.post(Constants.URL() + '/api/auth/signup-shop', this.credentials);
      window.localStorage.setItem(Constants.URL() + '@token', JSON.stringify(response.token));
      window.localStorage.setItem(Constants.URL() + '@usershop', JSON.stringify(response.data));
      this.router.navigate(['/home']);
    } catch (error) {
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
