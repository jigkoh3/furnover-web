import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { DataService } from 'src/app/providers/data-service/data.service';
import { Constants } from 'src/app/app.constants';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

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

  ) { }

  ngOnInit() {
    this.settingPassword = this._formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      verifyPassword: ['', Validators.required]
      
    });
  }
async updatePassword(){
  // console.log(this.dataPassword);
  try {
    await this.restApi.post(Constants.URL() + '/api/auth/change-password',this.dataPassword);
  } catch (error) {
   
  }
}
}
