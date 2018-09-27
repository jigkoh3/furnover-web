import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../app.constants';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(
    private router: Router,
    private restApi: RestApiService
  ) { }

  ngOnInit() {
    this.getList();
  }

  async getList() {
    try {
      const usershop = window.localStorage.getItem(Constants.URL() + '@usershop') ?
        JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : {};
      console.log(usershop._id);
      let res: any = await this.restApi.post(Constants.URL() + '/api/address-me', { user_id: usershop._id });
      if (res['status'] === 200) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  }

  addClick() {
    this.router.navigate(['/info-address']);
  }
}

