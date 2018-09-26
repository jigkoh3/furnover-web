import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public api: RestApiService) { }

  ngOnInit() {
    // this.testService();

  }

  async testService() {
    try {
      const tt: any = await this.api.get(Constants.URL() + '/');
      console.log(tt);
    } catch (error) {
      console.log(error);
    }
  }

}
