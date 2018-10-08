import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../app.constants';

@Component({
  selector: 'app-info-shop-category',
  templateUrl: './info-shop-category.component.html',
  styleUrls: ['./info-shop-category.component.css']
})
export class InfoShopCategoryComponent implements OnInit {
  getProduct: Array<any> = [];
  isEdit: boolean = false;
  page : any ={
    page: 1,
    limit: 30
  }
  constructor(
    
    private restApi: RestApiService
  ) { }

  ngOnInit() {
// this.getDataProduct();
  }
 async getDataProduct() {
  let user: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
  let data = {
    shop_id: user.shop_id,
    status: "all",
    name: "",
    page: 1,
    limit: 30
  }
  console.log(user)
let respone = await this.restApi.post(Constants.URL() +  '/api/product-shop-lis',data)
console.log(respone);    
  }
}
