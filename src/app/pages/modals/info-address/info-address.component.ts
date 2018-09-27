import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../../app.constants';

@Component({
  selector: 'app-info-address',
  templateUrl: './info-address.component.html',
  styleUrls: ['./info-address.component.css']
})
export class InfoAddressComponent implements OnInit {

  data: any = {};
  constructor(
    
    private restApi: RestApiService
  ) { }

  ngOnInit() {
  }

  async clickSave(data) {
    try {
      let response: any = await this.restApi.post(Constants.URL() + '/api/address', data);
    
    } catch (error) {

    }
  }

}
