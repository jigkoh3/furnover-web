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
  prepare = false;
  toggleSubMenu = false;
  shippings: Array<any> = [];
  stateSubmenu: Array<any> = [];
  wholesaleList: Array<any> = [];
  images: Array<any> = [];
  isSamePrice = true;
  ///////////////////// new price list////////
  isOptionBox = false;
  optionBoxs: Array<any> = [];
  optionList: Array<any> = [];
  isValidWholsale = false;

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

  //////////////////// new price list////////////
  openOption() {
    this.isOptionBox = true;
    this.optionBoxs.push({
      name: '',
      options: [{
        name: '',
        items: []
      }]
    });
    this.genTable();
  }

  addOptionBox() {
    if (this.optionBoxs.length < 2) {
      this.optionBoxs.push({
        name: '',
        options: [{
          name: '',
          items: []
        }]
      });
    }
    this.genTable();
  }

  delOptionBox(i) {
    this.optionBoxs.splice(i, 1);
    this.genTable();
  }

  addOptions(i) {
    if (this.optionBoxs[i].options.length < 20) {
      this.optionBoxs[i].options.push({
        name: '',
        items: []
      });
    }
    this.genTable();
  }

  delOptions(i, j) {
    this.optionBoxs[i].options.splice(j, 1);
    this.genTable();
  }

  genTable() {
    // {_id: "5be2c6711c9d0c0015f38a01", name: "kkkkk", price: 100, stock: 1}
    const optionList: Array<any> = [];
    if (this.optionBoxs.length === 1) {
      this.optionBoxs[0].options.forEach(option => {
        optionList.push({
          type: this.optionBoxs[0].name + ' ' + option.name,
          name: option.name,
          price: 0,
          stock: 0
        });
      });
    } else if (this.optionBoxs.length === 2) {
      this.optionBoxs[0].options.forEach(opt => {
        opt.items = [];
        this.optionBoxs[1].options.forEach(opt2 => {
          opt.items.push(opt2.name);
        });
      });
      this.optionBoxs[0].options.forEach(option => {
        option.items.forEach(item => {
          optionList.push({
            type: this.optionBoxs[0].name + ' ' + option.name,
            name: this.optionBoxs[1].name + ' ' + item,
            price: 0,
            stock: 0
          });
        });
      });
    }
    this.optionList = optionList;
    this.checkSamePrice();
  }

  checkSamePrice() {
    this.checkNum();
    this.isSamePrice = true;
    this.optionList.forEach(el => {
      if (this.optionList[0].price !== el.price) {
        this.isSamePrice = false;
      }
    });
  }

  checkMinMax() {
    this.isValidWholsale = false;
    this.wholesaleList.forEach(el => {
      if (el.min > el.max) {
        this.isValidWholsale = true;
      } else if (el.max < el.min) {
        this.isValidWholsale = true;
      }
    });
  }

  validatePriceAndStock() {
    const reg = new RegExp('^[0-9]+$');
    if (this.price < 0 || !reg.test(this.price)) {
      setTimeout(() => {
        this.price = '';
      }, 100);
    }

    if (this.stock < 0 || !reg.test(this.stock)) {
      setTimeout(() => {
        this.stock = '';
      }, 100);
    }
  }

  checkNum() {
    this.optionList.forEach(el => {
      const reg = new RegExp('^[0-9]+$');
      if (el.price < 0 || !reg.test(el.price)) {
        setTimeout(() => {
          el.price = '';
        }, 100);
      }
      if (el.stock < 0 || !reg.test(el.stock)) {
        setTimeout(() => {
          el.stock = '';
        }, 100);
      }
    });

    this.wholesaleList.forEach(el => {
      const reg = new RegExp('^[0-9]+$');
      if (el.min < 0 || !reg.test(el.min)) {
        setTimeout(() => {
          el.min = '';
        }, 100);
      }
      if (el.max < 0 || !reg.test(el.max)) {
        setTimeout(() => {
          el.max = '';
        }, 100);
      }
      if (el.price < 0 || !reg.test(el.price)) {
        setTimeout(() => {
          el.price = '';
        }, 100);
      }
    });

    this.checkMinMax();
  }

  //////////////////////////////////////////////

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
      console.log(this.resData);
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
    if (this.data.prices.length === 1 && (this.data.prices[0].name === 'normal' || this.data.prices[0].name === 'ปกติ')) {
      this.price = this.data.prices[0].price;
      this.stock = this.data.prices[0].stock;
    } else if (this.data.prices.length === 0) {
      this.price = 0;
      this.stock = 0;
    } else {
      this.isOptionBox = true;
      const uniqType: Array<any> = [];
      const uniqName: Array<any> = [];
      this.data.prices.forEach(el => {
        if (uniqType.indexOf(el.type) === -1) {
          uniqType.push(el.type);
        }
        if (uniqName.indexOf(el.name) === -1) {
          uniqName.push(el.name);
        }
      });

      /////// type box 1/////////////
      const _uniqType1: Array<any> = [];
      const _uniqType2: Array<any> = [];
      uniqType.forEach(el => {
        const spl: Array<any> = el.split(' ');
        if (_uniqType1.indexOf(spl[0]) === -1) {
          _uniqType1.push(spl[0]);
        }
        if (_uniqType2.indexOf(spl[1]) === -1) {
          _uniqType2.push(spl[1]);
        }
      });


      this.optionBoxs.push({
        name: _uniqType1[0],
        options: []
      });
      _uniqType2.forEach(el => {
        this.optionBoxs[0].options.push({
          name: el,
          items: []
        });
      });

      /////////////////////////////////

      //////////////// type box 2/////////////
      const _uniqName1: Array<any> = [];
      const _uniqName2: Array<any> = [];
      uniqName.forEach(el => {
        const spl: Array<any> = el.split(' ');
        if (_uniqName1.indexOf(spl[0]) === -1) {
          if (spl[0]) {
            _uniqName1.push(spl[0]);
          }
        }
        if (_uniqName2.indexOf(spl[1]) === -1) {
          if (spl[1]) {
            _uniqName2.push(spl[1]);
          }
        }
      });

      if (_uniqName2.length > 0) {
        this.optionBoxs.push({
          name: _uniqName1[0],
          options: []
        });
        _uniqName2.forEach(el => {
          this.optionBoxs[1].options.push({
            name: el,
            items: []
          });
        });
      }


      this.optionList = this.data.prices;
    }
    this.checkSamePrice();
    this.wholesaleList = this.data.wholesale;
    this.findNamebyLogistic();
    if (this.data.prepareshipping > 2) {
      this.prepare = true;
    }
  }

  tranformTxt(txt) {
    const txtArr: Array<any> = txt.split(' ');
    if (txtArr.length > 1) {
      return txtArr[1];
    } else {
      return txt;
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
    this.checkNum();
    if (e) {

    }
  }

  checkWholesaleMax(e, i) {
    this.checkNum();
    if (e) {
      this.wholesaleList.forEach((el, idx) => {
        if (i !== idx && idx > i) {
          this.wholesaleList[idx].min = this.wholesaleList[i].max + 1;
        }
      });
    }
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
    if (this.optionBoxs.length > 0) {
      this.data.prices = this.optionList;
    } else {
      this.data.prices = [{
        name: 'ปกติ',
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
