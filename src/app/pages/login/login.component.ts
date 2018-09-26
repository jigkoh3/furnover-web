import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../app.constants';
import { DataService } from '../../providers/data-service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: any = {};
  formGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private restApi: RestApiService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formGroupUsername: ['', Validators.required],
      formGroupPassword: ['', Validators.required]
    });
  }

  async onLogin() {
    console.log(this.formGroup);
    try {
      this.dataService.success('');
      let response: any = await this.restApi.post(Constants.URL() + '/api/auth/signin', this.credentials)
      window.localStorage.setItem(Constants.URL() + '@token', JSON.stringify(response.token));
      window.localStorage.setItem(Constants.URL() + '@usershop', JSON.stringify(response.data));
    } catch (error) {
      if (error && error.message === 'User not found.') {
        return this.dataService.error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง');
      }
      return this.dataService.error('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    }
  }

}
