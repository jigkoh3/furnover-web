import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../app.constants';

export interface PeriodicElement {
  name1: string;
  name2: string;
  price: number;
  stock: number;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent implements OnInit {
  data: any = {
    category_id: ''
  };
  isOptions = false;
  displayedColumns: string[] = [];
  dataSource = ELEMENT_DATA;
  isShowMainOption1 = false;
  isShowMainOption2 = false;
  isShowCol1 = false;
  isShowCol2 = false;
  nameOption1 = '';
  subOption1 = '';
  subOption2 = '';

  mainOptions_1: Array<any> = [];
  mainOptions_2: Array<any> = [];
  subOptions_1: Array<any> = [];
  subOptions_2: Array<any> = [];
  constructor(private restApi: RestApiService) { }

  ngOnInit() {
    this.getInitData();
  }

  async getInitData() {
    try {
      const userShop: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
      const data: any = {
        product_id: null,
        shop_id: userShop.shop._id
      };
      const res: any = await this.restApi.post(Constants.URL() + '/api/product-item', data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  showOption(num) {
    this.isOptions = true;
    if (num === 1) {
      this.isShowMainOption1 = true;
      this.isShowCol1 = true;
      this.displayedColumns = ['name1', 'price', 'stock'];
      this.mainOptions_1.push({
        name: 'ชื่อ'
      });
      this.subOptions_1.push({
        name: 'ตัวเลือก'
      });
      this.generateDataSource();
      // this.dataSource.push({
      //   name1: 'ตัวเลือก', name2: null, price: 0, stock: 0
      // });
    } else if (num === 2) {
      this.isShowMainOption2 = true;
      this.isShowCol2 = true;
      this.displayedColumns = ['name1', 'name2', 'price', 'stock'];
      this.mainOptions_2.push({
        name: 'ชื่อ'
      });
      this.subOptions_2.push({
        name: 'ตัวเลือก'
      });
      this.generateDataSource();
      // this.dataSource[0] = {
      //   name1: this.subOption1 ? this.subOption1 : 'ตัวเลือก', name2: 'ตัวเลือก', price: 0, stock: 0
      // };
    }
  }

  onFixSubOptionNameChange() {
    this.dataSource = [];
  }

  generateDataSource() {

  }

  addSubOption1() {
    this.subOptions_1.push({
      name: 'ตัวเลือก'
    });
  }

  async save() {
    if (this.data._id) {
      // edit
    } else {
      try {
        const userShop: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
        this.data.shop_id = userShop.shop._id;
        const res: any = await this.restApi.post(Constants.URL() + '/api/product-item', this.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }


}
