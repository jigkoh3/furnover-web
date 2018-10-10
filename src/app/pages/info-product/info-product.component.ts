import { Component, OnInit, ViewChild } from '@angular/core';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../app.constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

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
  @ViewChild('productImg') productImg;
  productImgModel: any;
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
  prepare = false;
  mainOptions_1: Array<any> = [];
  mainOptions_2: Array<any> = [];
  subOptions_1: Array<any> = [];
  subOptions_2: Array<any> = [];
  toggleSubMenu = false;
  shippings: Array<any> = [];
  stateSubmenu: Array<any> = [];
  wholesaleList: Array<any> = [];
  priceList: Array<any> = [];
  images: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute,
    private restApi: RestApiService,
    private spinner: NgxSpinnerService,
    public route: Router) { }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        if (params['productid']) {
          const productid = params['productid'];
          this.getInitData(productid);
        } else {
          this.getInitData(null);
        }
      });
  }

  async getInitData(productid) {
    this.spinner.show();
    try {
      const userShop: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
      const bodyReq: any = {
        product_id: productid,
        shop_id: userShop.shop._id
      };
      const res: any = await this.restApi.post(Constants.URL() + '/api/product-item', bodyReq);
      this.resData = res.data;
      if (productid) {
        this.bindBack();
      }
      this.spinner.hide();
      console.log(res);
    } catch (error) {
      console.log(error);
      this.spinner.hide();
    }
  }

  bindBack() {
    this.data = this.resData.product;
    this.images = this.data.images;
    this.data.categories_tree.forEach((el, i) => {
      this.stateSubmenu.push({
        _id: el._id,
        name: el.name,
        items: el.children,
        index: i
      });
    });
    if (this.data.prices.length > 0 && this.data.prices[0].name === 'normal') {
      this.price = this.data.prices[0].price;
      this.stock = this.data.prices[0].stock;
    }
    this.wholesaleList = this.data.wholesale;
    this.findNamebyLogistic();
    if (this.data.prepareshipping > 2) {
      this.prepare = true;
    }
  }

  findNamebyLogistic() {
    this.shippings = this.data.shipping;
    this.resData.logistics.forEach(el1 => {
      this.data.shipping.forEach(el2 => {
        if (el1._id === el2.logistic_id || el1._id === el2._id) {
          el2._id = el1._id;
          el2.name = el1.name;
          el1.isChecked = true;
        }
      });
    });
  }

  uploadImg() {
    this.productImg.nativeElement.click();
  }

  uploadTofireBase(base64) {
    const storageRef = firebase.storage().ref();
    const fileRandom = Math.floor((Date.now() / 1000) + new Date().getUTCMilliseconds());
    const uploadTask: any = storageRef.child(`images/uploads/${fileRandom}.jpg`);

    uploadTask.putString(base64, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
      uploadTask.getDownloadURL().then(url => {
        this.images.push({
          url: url
        });
      });
    });
  }

  deleteImg(index) {
    const conf = window.confirm('ยืนยันการลบรูปสินค้า');
    if (conf) {
      this.images.splice(index, 1);
    }
  }

  onProductImgChange(e) {
    const fileBrowser = this.productImg.nativeElement;
    const reader: any = new FileReader();
    if (fileBrowser.files.length > 0) {
      reader.readAsDataURL(fileBrowser.files.length > 0 ? fileBrowser.files[0] : null);
      reader.onload = () => {
        const base64 = reader.result.replace(/\n/g, '');
        this.uploadTofireBase(base64);
      };
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
    console.log(e.checked);
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
        if (this.shippings[i]._id === item._id || this.shippings[i].logistic_id === item._id) {
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
    this.data.images = this.images;
    if (this.images.length > 0) {
      this.data.image = this.images[0];
    }
    if (!this.prepare) {
      this.data.prepareshipping = 2;
    }

    if (this.data._id) {
      try {
        const res: any = await this.restApi.put(Constants.URL() + '/api/product/' + this.data._id, this.data);
        this.spinner.hide();
        this.route.navigate(['my-product']);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        // console.log(this.findParent(this.resData.categories, this.stateSubmenu[this.stateSubmenu.length - 1]));
        const res: any = await this.restApi.post(Constants.URL() + '/api/product', this.data);
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
