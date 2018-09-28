import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { DataService } from 'src/app/providers/data-service/data.service';
import { Constants } from 'src/app/app.constants';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ModalCompleteComponent } from 'src/app/pages/modals/modal-complete/modal-complete.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-setting-password',
  templateUrl: './setting-password.component.html',
  styleUrls: ['./setting-password.component.css']
})
export class SettingPasswordComponent implements OnInit {
  dataPassword: any = {};
  settingPassword: FormGroup;

  constructor(
    private restApi: RestApiService,
    private dataService: DataService,
    private _formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,

    public dialog: MatDialog

  ) { }

  ngOnInit() {
    this.settingPassword = this._formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      verifyPassword: ['', Validators.required]

    });
  }
  async updatePassword() {
    // console.log(this.dataPassword);
    this.spinner.show();

    try {
      await this.restApi.post(Constants.URL() + '/api/auth/change-password', this.dataPassword);
      this.spinner.hide();
      this.dialog.closeAll();

      this.dialog.open(ModalCompleteComponent, {
        width: '700px',
        data: { message: 'แก้ไขรหัสผ่านสำเร็จ' }
      });
    } catch (error) {
      this.spinner.hide();      
      if (error) {
        if (error['error']['message'] === 'Username or Password is invalid.') {
          this.dataService.error('รหัสผ่านปัจจุบันไม่ถูกต้อง');
        } else if (error['error']['message'] === 'Please verify your password.') {
          this.dataService.error('ยืนยันรหัสผ่านไม่ถูกต้อง');
        }
      }
    }
  }
}
