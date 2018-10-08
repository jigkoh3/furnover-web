import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../app.constants';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { DataService } from '../../providers/data-service/data.service';
@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.scss']
})
export class MyProductComponent implements OnInit {
  shopUser: any = {
    roles: [],
    shop: {
      images: [],
      logistics: []
    }
  };

  sortModel: any = [
    {
      sortId: 0,
      sortName: 'ล่าสุด'
    },
    {
      sortId: 1,
      sortName: 'สินค้าขายดี'
    },
    {
      sortId: 2,
      sortName: 'ราคา'
    }
  ];

  productData: any = {
    products: []
  };
  tabs: any = [];
  pageData: any = {
    shop_id: "",
    status: "",
    name: "",
    page: 1,
    limit: 30
  };

  // sortIndex: number = 0;
  
  constructor(
    public route: Router,
    public restApi: RestApiService,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.getProduct('all');
  }

  onLinkClick(event) {
    this.pageData.name = '';
    if (event.index === 0) {
      this.getProduct('all');
    } else if (event.index === 1) {
      this.getProduct('sell');
    } else if (event.index === 2) {
      this.getProduct('outofstock');
    } else if (event.index === 3) {
      this.getProduct('suspended');
    }
  }

  async getProduct(status) {
    this.shopUser = window.localStorage.getItem(Constants.URL() + '@usershop') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;
    this.pageData = {
      shop_id: this.shopUser.shop_id,
      status: status,
      name: this.pageData.name,
      page: 1,
      limit: 30
    };
    try {
      let data: any = await this.restApi.post(Constants.URL() + '/api/product-shop-list', this.pageData);
      if (data['status'] === 200) {
        this.productData = data.data;
        console.log(this.productData);
        this.tabs = data.data.tabs;
        if (this.productData && this.productData.length === 0) {
          this.dataService.warning('ไม่พบข้อมูลบุคลากร');
        }
      }
    } catch (error) {
      this.dataService.error("โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }

  // selectSortIndex(item, i) {
  //   this.sortIndex = i;
  // }

  gotoCreateProduct() {
    this.route.navigate(['/info-product']);
  }

  search(event,status) {
    if (event.keyCode == 13) {
      this.pageData.page = 1;
      console.log(status)
      this.getProduct(status);
    }
  }

  previos(status) {
    this.pageData.page--;
    this.getProduct(status);
  }

  page(item,status) {
    if (this.pageData.page !== item) {
      this.pageData.page = item;
      this.getProduct(status);
    }
  }

  next(status) {
    this.pageData.page++;
    this.getProduct(status);
  }

}
