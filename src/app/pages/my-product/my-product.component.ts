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

  data: any = {
    status: [],
    tabs: []
  };

  statusArray: any = [];
  status: any = 'all';

  tabs: any = [];
  pageData: any = {
    shop_id: '',
    status: '',
    name: '',
    page: 1,
    limit: 30
  };

  showDelete = false;
  selectedProduct: any = [];
  checked = false;
  tabStatus: any = 'all';
  products: Array<any> = [];
  constructor(
    public route: Router,
    public restApi: RestApiService,
    public dataService: DataService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.getStatus();
  }

  async getStatus() {
    this.spinner.show();
    const shop = window.localStorage.getItem(Constants.URL() + '@usershop') ?
      JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;
    const objectData = {
      shop_id: shop.shop_id,
      status: this.status,
      name: this.pageData.name,
      page: this.pageData.page,
      limit: this.pageData.limit
    };
    try {
      const res: any = await this.restApi.post(Constants.URL() + '/api/product-shop-list', objectData);
      if (res['status'] === 200) {
        this.statusArray = res.data.status;
        this.spinner.hide();
        this.getProduct();
      }
    } catch (error) {
      this.spinner.hide();
      this.dataService.error('โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง');
    }
  }

  onLinkClick(event) {
    this.showDelete = false;
    this.selectedProduct = [];
    this.pageData.name = '';
    this.pageData.page = 1;

    if (this.statusArray && this.statusArray.length > 0) {
      this.status = this.statusArray[event.index].status;
    }
    this.getProduct();
  }

  async getProduct() {
    this.dataService.warning('');

    this.spinner.show();
    this.shopUser = window.localStorage.getItem(Constants.URL() + '@usershop') ?
      JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;

    const objectData = {
      shop_id: this.shopUser.shop_id,
      status: this.status,
      name: this.pageData.name,
      page: this.pageData.page,
      limit: this.pageData.limit
    };
    try {
      const res: any = await this.restApi.post(Constants.URL() + '/api/product-shop-list', objectData);
      if (res['status'] === 200) {
        this.data = res.data;
        this.products = res.data.product.items;
        this.tabs = res.data.tabs;
        this.spinner.hide();

        if (this.data && this.data.product.items.length === 0) {
          this.dataService.warning('ไม่พบข้อมูลสินค้า');
        }
      }
    } catch (error) {
      this.spinner.show();
      this.dataService.error('โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง');
    }
  }

  gotoCreateProduct() {
    this.route.navigate(['/info-product']);
  }

  gotoEditProduct(productid) {
    this.route.navigate(['/info-product'], { queryParams: { productid: productid } });
  }

  search(event) {
    if (event.keyCode === 13) {
      this.pageData.page = 1;
      this.getProduct();
    }
  }

  previos() {
    this.pageData.page--;
    this.getProduct();
  }

  page(item) {
    if (this.pageData.page !== item) {
      this.pageData.page = item;
      this.getProduct();
    }
  }

  next() {
    this.pageData.page++;
    this.getProduct();
  }

  checkboxOptions(event, item) {
    if (event.checked) {
      this.showDelete = true;
      this.selectedProduct.push(item);
      if (this.data.product.items.length === this.selectedProduct.length) {
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
  }

  onselectAll(event) {
    this.selectedProduct = [];
    this.data.product.items.forEach(selectItem => {
      if (event.checked) {
        selectItem.checked = true;
        this.selectedProduct.push(selectItem);
      } else {
        selectItem.checked = false;
        this.showDelete = false;
        this.selectedProduct = [];
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDeleteProductComponent, {
      width: '700px',
      height: 'inherit',
      hasBackdrop: true,
      data: JSON.parse(JSON.stringify(this.selectedProduct))
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.showDelete = false;
        this.getProduct();
      }
    });
  }

}
