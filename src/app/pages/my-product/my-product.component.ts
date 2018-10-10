import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../app.constants';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { DataService } from '../../providers/data-service/data.service';
import { MatDialog } from '@angular/material';
import { ModalDeleteProductComponent } from '../modals/modal-delete-product/modal-delete-product.component';
import { NgxSpinnerService } from 'ngx-spinner';
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

  // sortModel: any = [
  //   {
  //     sortId: 0,
  //     sortName: 'ล่าสุด'
  //   },
  //   {
  //     sortId: 1,
  //     sortName: 'สินค้าขายดี'
  //   },
  //   {
  //     sortId: 2,
  //     sortName: 'ราคา'
  //   }
  // ];

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

  showDelete: boolean = false;
  selectedProduct: any = [];
  checked: boolean = false;
  // sortIndex: number = 0;
  tabStatus: any = 'all';
  constructor(
    public route: Router,
    public restApi: RestApiService,
    public dataService: DataService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.getProduct(this.tabStatus);
  }

  onLinkClick(event) {
    this.showDelete = false;
    this.selectedProduct = [];
    this.pageData.name = '';
    if (event.index === 0) {
      this.tabStatus = 'all';
      this.getProduct(this.tabStatus);
    } else if (event.index === 1) {
      this.tabStatus = 'sell';
      this.getProduct(this.tabStatus);
    } else if (event.index === 2) {
      this.tabStatus = 'outofstock';
      this.getProduct(this.tabStatus);
    } else if (event.index === 3) {
      this.tabStatus = 'suspended';
      this.getProduct(this.tabStatus);
    }
  }

  async getProduct(status) {
    console.log(status)
    this.spinner.show();
    this.shopUser = window.localStorage.getItem(Constants.URL() + '@usershop') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;

    this.pageData = {
      shop_id: this.shopUser.shop_id,
      status: status,
      name: this.pageData.name,
      page: this.pageData.page,
      limit: this.pageData.limit
    };
    console.log(this.pageData)
    try {
      let data: any = await this.restApi.post(Constants.URL() + '/api/product-shop-list', this.pageData);
      if (data['status'] === 200) {
        this.productData = data.data;
        this.spinner.hide();
        console.log(this.productData);
        this.tabs = data.data.tabs;
        if (this.productData && this.productData.length === 0) {
          this.dataService.warning('ไม่พบข้อมูลสินค้า');
        }
      }
    } catch (error) {
      this.spinner.show();
      this.dataService.error("โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }

  // selectSortIndex(item, i) {
  //   this.sortIndex = i;
  // }

  gotoCreateProduct() {
    this.route.navigate(['/info-product']);
  }

  gotoEditProduct(productid) {
    this.route.navigate(['/info-product'], { queryParams: { productid: productid } });
  }

  search(event) {
    console.log(this.tabStatus)
    if (event.keyCode == 13) {
      this.pageData.page = 1;
      this.getProduct(this.tabStatus);
    }
  }

  previos() {
    this.pageData.page--;
    this.getProduct(this.tabStatus);
  }

  page(item) {
    if (this.pageData.page !== item) {
      this.pageData.page = item;
      this.getProduct(this.tabStatus);
    }
  }

  next() {
    this.pageData.page++;
    this.getProduct(this.tabStatus);
  }

  checkboxOptions(event, item) {
    if (event.checked) {
      this.showDelete = true;
      this.selectedProduct.push(item);
      if (this.productData.products.length === this.selectedProduct.length) {
        this.checked = true;
      }
    } else {
      if (this.selectedProduct.length >= 1) {
        for (let index = 0; index < this.selectedProduct.length; index++) {
          const data = this.selectedProduct[index];
          if (data === item) {
            this.selectedProduct.splice(index, 1);
            this.checked = false;
          }
        }
        if (this.selectedProduct <= 0) {
          this.showDelete = false;
        }
      } else {
        this.showDelete = false;
      }
    }
    // console.log(this.selectedProduct);
  }

  onselectAll(event) {
    this.selectedProduct = [];
    this.productData.products.forEach(selectItem => {
      if (event.checked) {
        selectItem.checked = true;
        this.selectedProduct.push(selectItem);
      } else {
        selectItem.checked = false;
        this.showDelete = false;
        this.selectedProduct = [];
      }
    });
    // console.log(this.selectedProduct);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDeleteProductComponent, {
      width: '700px',
      hasBackdrop: true,
      data: JSON.parse(JSON.stringify(this.selectedProduct))
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.showDelete = false;
        this.getProduct(this.tabStatus);
      }
      else {
        // this.showDelete = false;
        // this.selectedProduct = [];
      }
    });
  }

}
