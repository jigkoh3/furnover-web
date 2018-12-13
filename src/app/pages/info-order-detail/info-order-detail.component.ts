import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { Constants } from 'src/app/app.constants';

@Component({
  selector: 'app-info-order-detail',
  templateUrl: './info-order-detail.component.html',
  styleUrls: ['./info-order-detail.component.css']
})
export class InfoOrderDetailComponent implements OnInit {
  orderID: String = '';
  data: any = {};
  item_ids: Array<any> = [];
  constructor(private activatedRoute: ActivatedRoute, private api: RestApiService) { }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        if (params['id']) {
          const orderID = params['id'];
          const item_ids = params['item_ids'];
          this.item_ids = item_ids;
          this.orderID = orderID;
          this.getOrderDetail();
        }
      });
  }

  async getOrderDetail() {
    const shop: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
    try {
      const reqBody: any = {
        item_ids: this.item_ids,
        order_id: this.orderID,
        shop_id: shop.shop_id
      };
      const res: any = await this.api.post(Constants.URL() + '/api/get-order-detail', reqBody);
      this.data = res.data;
    } catch (error) {
      throw error;
    }
  }

}
