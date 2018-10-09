import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../app.constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

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
    category_id: '',
    images: [],
    wholesale: [],
    prepareshipping: 2,
    condition: 'ของใหม่'
  };
  price = null;
  stock = null;
  resData: any = {};
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
  toggleSubMenu = false;
  shippings: Array<any> = [];
  stateSubmenu: Array<any> = [];
  wholesaleList: Array<any> = [];

  constructor(private restApi: RestApiService, private spinner: NgxSpinnerService, public route: Router) { }

  ngOnInit() {
    this.getInitData();
  }

  async getInitData() {
    this.spinner.show();
    try {
      const userShop: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
      const data: any = {
        product_id: null,
        shop_id: userShop.shop._id
      };
      const res: any = await this.restApi.post(Constants.URL() + '/api/product-item', data);
      this.resData = res.data;
      this.spinner.hide();
      console.log(res);
    } catch (error) {
      console.log(error);
      this.spinner.hide();
    }
  }

  addWholesale() {
    this.wholesaleList.push({
      min: 0,
      max: 0,
      price: 0
    });
  }

  delWholesale(index) {
    this.wholesaleList.splice(index, 1);
  }

  expanChildren(index, item) {
    const stateIndex = this.stateSubmenu.findIndex(el => {
      return el._id === item._id || el.index === index;
    });
    if (stateIndex === -1) {
      this.stateSubmenu.push({
        _id: item._id,
        name: item.name,
        items: item.children,
        index: index
      });
    } else {
      this.stateSubmenu.splice(stateIndex, this.stateSubmenu.length - stateIndex);
      this.stateSubmenu.push({
        _id: item._id,
        name: item.name,
        items: item.children,
        index: index
      });
    }
    if (item.children.length === 0) {
      setTimeout(() => {
        this.toggleSubMenu = false;
      }, 100);
    }
  }


  expansubMenu() {
    this.toggleSubMenu = true;
  }

  toggleEditShippingPrice(num) {
    this.shippings[num].isEdit = true;
    this.shippings[num].oldPrice = this.shippings[num].shippingfee;
  }

  submitShipping(num) {
    this.shippings[num].isEdit = false;
  }

  cancelShiping(num) {
    this.shippings[num].isEdit = false;
    this.shippings[num].shippingfee = this.shippings[num].oldPrice;
  }

  shippingChange(e, item) {
    if (e.checked) {
      const logistics = this.shippings.filter(el => {
        return el._id === item._id;
      });
      if (logistics.length <= 0) {
        item.isChecked = true;
        item.shippingfee = 0;
        this.shippings.push(item);
      }
    } else {
      for (let i = 0; i < this.shippings.length; i++) {
        if (this.shippings[i]._id === item._id) {
          this.shippings.splice(i, 1);
          break;
        }
      }
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
    this.spinner.show();
    if (this.data._id) {
      // edit
    } else {
      try {
        const userShop: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
        this.data.shop_id = userShop.shop._id;
        const tranformShipping: Array<any> = [];
        this.shippings.forEach(el => {
          tranformShipping.push({
            logistic_id: el._id,
            shippingfee: el.shippingfee
          });
        });
        this.data.shipping = tranformShipping;
        this.data.prices = [{
          name: 'normal',
          price: this.price,
          stock: this.stock
        }];
        this.data.category_id = this.stateSubmenu[this.stateSubmenu.length - 1] ? this.stateSubmenu[this.stateSubmenu.length - 1]._id : '';
        this.data.wholesale = this.wholesaleList;
        console.log(this.data);
        // console.log(this.findParent(this.resData.categories, this.stateSubmenu[this.stateSubmenu.length - 1]));
        const res: any = await this.restApi.post(Constants.URL() + '/api/product', this.data);
        console.log(res);
        this.spinner.hide();
        this.route.navigate(['my-product']);
      } catch (error) {
        console.log(error);
        this.spinner.hide();
      }
    }
  }

  // findParent(items, item) {
  //   var member, i, array;
  //   for (member in items) {
  //     if (
  //       items.hasOwnProperty(member) &&
  //       typeof items[member] === "object" &&
  //       items[member] instanceof Array
  //     ) {
  //       array = items[member].children;
  //       for (i = 0; i < array.length; i += 1) {
  //         if (array[i]._id === item.parent) {
  //           return array;
  //         }
  //       }
  //     }
  //   }
  // }


}
