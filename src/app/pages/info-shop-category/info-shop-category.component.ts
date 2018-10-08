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
  constructor(
    
    private restApi: RestApiService
  ) { }

  ngOnInit() {
this.getDataProduct();
  }
 async getDataProduct() {
//   let user: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
//   let data = {
//     shop_id: user.shop_id
//   }
// let respone = await this.restApi.post(Constants.URL() +  '/api/product-shop-lis',data)
// console.log(respone);
    let respone = {
      datas: [
        {
          name: "เสื้อยึด",
          image: "http://c.lnwfile.com/f0etda.jpg",
          price: 170,
          _id: "001"
        }, {
          name: "เสื้อวัยรุ่น",
          image: "https://cp.lnwfile.com/cm8qiw.jpg",
          price: 180,
          _id: "002"
        }, {
          name: "เสื้อผู้หญิง",
          image: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/tmiyunfibl9y6jxn7hh0/%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%81%E0%B8%88%E0%B9%87%E0%B8%84%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95%E0%B8%9F%E0%B8%B8%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5%E0%B8%9C%E0%B8%B9%E0%B9%89-chelsea-fc-franchise-RK4EXO.jpg",
          price: 150,
          _id: "003"
        }, {
          name: "เสื้อยึด",
          image: "https://d126drxy0lew0u.cloudfront.net/catalog/product/large_image/06_409318.jpg",
          price: 170,
          _id: "004"
        }
      ]
    }
    this.getProduct = respone.datas;
  }
}
