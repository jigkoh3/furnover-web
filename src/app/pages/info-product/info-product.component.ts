import { Component, OnInit, ViewChild } from '@angular/core';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../app.constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent implements OnInit {
  @ViewChild('productImg') productImg;
  product_id: any;
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
  dataSource: Array<any> = [];
  isShowMainOption1 = false;
  isShowMainOption2 = false;
  isShowCol1 = false;
  isShowCol2 = false;
  nameOption1 = '';
  nameOption2 = '';
  prepare = false;
  mainOptions_1: Array<any> = [];
  mainOptions_2: Array<any> = [];
  toggleSubMenu = false;
  shippings: Array<any> = [];
  stateSubmenu: Array<any> = [];
  wholesaleList: Array<any> = [];
  images: Array<any> = [];
  priceList: Array<any> = [];
  stockType: Array<any> = [
    {
      name: '',
      items: []
    },
    {
      name: '',
      items: []
    }];
  isSamePrice = true;

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
          this.product_id = productid;
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
    } catch (error) {
      console.log(error);
      this.spinner.hide();
      throw error;
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
      this.isOptions = false;
    } else if (this.data.prices.length === 0) {
      this.isOptions = false;
    } else {
      this.isOptions = true;
      this.data.prices.forEach(price => {
        const name: Array<any> = price.name.split(' ');
        if (name.length === 2) {
          this.isShowMainOption1 = true;
          this.nameOption1 = name[0];
          this.stockType[0].name = this.nameOption1;
          const arr_1: Array<any> = this.stockType[0].items.filter(el => {
            return el.name === name[1];
          });
          if (arr_1.length <= 0) {
            this.stockType[0].items.push({
              name: name[1]
            });
          }
          this.generateDataSource(0);
        } else if (name.length === 4) {
          this.isShowMainOption1 = true;
          this.isShowMainOption2 = true;
          this.nameOption1 = name[0];
          this.nameOption2 = name[2];
          this.stockType[0].name = this.nameOption1;
          const arr_1: Array<any> = this.stockType[0].items.filter(el => {
            return el.name === name[1];
          });
          if (arr_1.length <= 0) {
            this.stockType[0].items.push({
              name: name[1]
            });
          }
          this.stockType[1].name = this.nameOption2;
          const arr_2: Array<any> = this.stockType[1].items.filter(el => {
            return el.name === name[3];
          });
          if (arr_2.length <= 0) {
            this.stockType[1].items.push({
              name: name[3]
            });
          }
          this.generateDataSource(1);
        }
        this.dataSource.forEach((el, i) => {
          el.price = this.data.prices[i].price;
          el.stock = this.data.prices[i].stock;
        });
      });
    }
    this.wholesaleList = this.data.wholesale;
    this.findNamebyLogistic();
    if (this.data.prepareshipping > 2) {
      this.prepare = true;
    }
    this.checkSamePrice();
  }

  deleteMainOption(idx) {
    if (idx === 1) {
      if (this.isShowMainOption2) {
        this.isShowMainOption1 = true;
      } else {
        this.isShowMainOption1 = false;
        this.isOptions = false;
        this.dataSource = [];
      }
    } else if (idx === 2) {
      this.isShowMainOption2 = false;
      this.isShowMainOption1 = true;
      this.stockType[1].name = '';
      this.stockType[1].items = [];
      this.generateDataSource(0);
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
    if (this.wholesaleList.length <= 0) {
      this.wholesaleList.push({
        min: 0,
        max: 0,
        price: 0
      });
    } else {
      let min = 0;
      if (this.wholesaleList[this.wholesaleList.length - 1].min > this.wholesaleList[this.wholesaleList.length - 1].max) {
        min = this.wholesaleList[this.wholesaleList.length - 1].min + 1;
      } else if (this.wholesaleList[this.wholesaleList.length - 1].max > this.wholesaleList[this.wholesaleList.length - 1].min) {
        min = this.wholesaleList[this.wholesaleList.length - 1].max + 1;
      } else {
        min = this.wholesaleList[this.wholesaleList.length - 1].max + 1;
      }
      this.wholesaleList.push({
        min: min,
        max: 0,
        price: 0
      });
    }
  }

  checkWholesaleMin(e, i) {
    if (e) {

    }
  }

  checkWholesaleMax(e, i) {
    if (e) {
      this.wholesaleList.forEach((el, idx) => {
        if (i !== idx && idx > i) {
          this.wholesaleList[idx].min = this.wholesaleList[i].max + 1;
        }
      });
    }
  }

  checkSamePrice() {
    this.isSamePrice = true;
    this.dataSource.forEach(el => {
      if (this.dataSource[0].price !== el.price) {
        this.isSamePrice = false;
      }
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
      this.stockType[0].items = [];
      this.isShowMainOption1 = true;
      this.isShowCol1 = true;
      this.stockType[0].items.push({
        name: ''
      });
      this.generateDataSource(0);
    } else if (num === 2) {
      this.isShowMainOption2 = true;
      this.isShowCol2 = true;
      this.stockType[1].items.push({
        name: ''
      });
      this.generateDataSource(1);
    }
  }

  generateDataSource(idx) {
    this.dataSource = [];
    if (idx === 0) {
      this.stockType[idx].items.forEach(el => {
        this.dataSource.push({
          name1: el.name ? el.name : 'ตัวเลือก',
          name2: null,
          price: 0,
          stock: 0,
          concat1: 'สี' + ' ' + el.name,
          concat2: null
        });
      });
    } else {
      for (let i = 0; i < this.stockType[0].items.length; i++) {
        for (let j = 0; j < this.stockType[1].items.length; j++) {
          this.dataSource.push({
            name1: this.stockType[0].items[i].name ? this.stockType[0].items[i].name : 'ตัวเลือก',
            name2: this.stockType[1].items[j].name ? this.stockType[1].items[j].name : 'ตัวเลือก',
            price: 0,
            stock: 0,
            concat1: this.stockType[0].name + ' ' + this.stockType[0].items[i].name,
            concat2: this.stockType[1].name + ' ' + this.stockType[1].items[j].name
          });
        }
      }
    }
  }

  addSubOption1() {
    this.stockType[0].name = this.nameOption1;
    if (this.stockType[0].items.length < 20) {
      this.stockType[0].items.push({
        name: ''
      });
    }
    this.generateDataSource(0);
  }

  addSubOption2() {
    this.stockType[1].name = this.nameOption2;
    if (this.stockType[1].items.length < 20) {
      this.stockType[1].items.push({
        name: ''
      });
    }
    this.generateDataSource(1);
  }

  delSubOption(idx, index) {
    const confirm = window.confirm('ยืนยันการลบ');
    if (confirm) {
      this.stockType[idx].items.splice(index, 1);
    }
    if (idx === 0) {
      this.generateDataSource(0);
    } else {
      this.generateDataSource(1);
    }
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
    if (this.isOptions) {
      const priceList: Array<any> = [];
      this.dataSource.forEach(el => {
        if (el.concat2 === null) {
          priceList.push({
            name: el.concat1,
            price: el.price,
            stock: el.stock
          });
        } else {
          priceList.push({
            name: el.concat1 + ' ' + el.concat2,
            price: el.price,
            stock: el.stock
          });
        }
      });
      this.data.prices = priceList;
    } else {
      this.data.prices = [{
        name: 'normal',
        price: this.price,
        stock: this.stock
      }];
    }
    this.data.category_id = this.stateSubmenu[this.stateSubmenu.length - 1] ? this.stateSubmenu[this.stateSubmenu.length - 1]._id : '';
    this.data.wholesale = this.wholesaleList;
    this.data.images = this.images;
    if (this.images.length > 0) {
      this.data.image = this.images[0];
    }
    if (!this.prepare) {
      this.data.prepareshipping = 2;
    }

    console.log(this.data);

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
        const res: any = await this.restApi.post(Constants.URL() + '/api/product', this.data);
        this.spinner.hide();
        this.route.navigate(['my-product']);
      } catch (error) {
        console.log(error);
        this.spinner.hide();
      }
    }
  }

  async deleteProduct() {
    const conf = window.confirm('ยืนยันการลบสินค้า');
    if (conf) {
      this.spinner.show();
      try {
        const res: any = await this.restApi.delete(Constants.URL() + '/api/product/' + this.product_id);
        this.spinner.hide();
        this.route.navigate(['my-product']);
      } catch (error) {
        this.spinner.hide();
        throw error;
      }
    }
  }

}
