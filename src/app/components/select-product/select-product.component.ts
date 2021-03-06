import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Constants } from "../../app.constants";
import { RestApiService } from "../../providers/rest-api-service/rest-api.service";
import { DataService } from "../../providers/data-service/data.service";

@Component({
  selector: "app-select-product",
  templateUrl: "./select-product.component.html",
  styleUrls: ["./select-product.component.css"]
})
export class SelectProductComponent implements OnInit {
  @Input()
  productSelected: any;
  @Input()
  status: string;
  @Output()
  onSelectedProduct: EventEmitter<any> = new EventEmitter<any>();
  checked: boolean = false;
  productSelectedCopy: any;
  @Input() startDateEndDate: any;
  itemInPromo: any;
  itemSelect: boolean = false;
  itemInPromoId: any;
  itemProdId: any;

  data: any = {
    tabs: []
  };

  pageData: any = {
    shop_id: "",
    status: "",
    name: "",
    page: 1,
    limit: 30
  };
  constructor(
    private spinner: NgxSpinnerService,
    private restApi: RestApiService,
    public dataService: DataService
  ) {

  }

  ngOnInit() {
    let user = window.localStorage.getItem(Constants.URL() + "@user")
      ? JSON.parse(window.localStorage.getItem(Constants.URL() + "@user"))
      : null;
    this.productSelected = JSON.parse(JSON.stringify(this.productSelected));
    this.productSelectedCopy = JSON.parse(JSON.stringify(this.productSelected));
    this.pageData.shop_id = user.shop_id;
    this.pageData.status = this.status;
    // this.pageData.status = "all";

    this.getProduct();
  }

  async getProduct() {
    try {
      this.spinner.show();
      let promotionProd: any = await this.restApi.post(Constants.URL() + "/api/product-discount-dubpicate", this.startDateEndDate);
      this.itemInPromo = promotionProd;
      // console.log(this.itemInPromo);
      let itms: Array<any> = [];
      if (this.itemInPromo.data) {
        this.itemInPromo.data.forEach(itm => {
          itms.push(itm._id);
          // this.itemInPromoId.push(itm._id);
          // console.log(this.itemInPromoId);
        });
      }
      // console.log(this.itemInPromo);
      let data: any = await this.restApi.post(Constants.URL() + "/api/product-shop-list", this.pageData);
      this.spinner.hide();
      if (data["status"] === 200) {
        this.data = data.data;
        // console.log(this.data);
        this.data.product.items.forEach(product => {
          // this.itemProdId.push(product._id)
          // console.log(this.itemProdId);
          if (itms.indexOf(product._id) === -1) {
            product.isPromotion = false;
          } else {
            product.isPromotion = true;
          }
        });
        // console.log(this.data);
        this.onCheckSelectedAll();
        if (this.data.product.items && this.data.product.items.length === 0) {
          this.dataService.warning("ไม่พบข้อมูลสินค้า");
        }
      }
    } catch (error) {
      this.spinner.hide();
      this.dataService.error("โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง");
    }
  }

  search(event) {
    if (event.keyCode == 13) {
      this.getProduct();
    }
  }

  previos() {
    this.pageData.page--;
    this.getProduct();
  }
  page(i) {
    this.pageData.page = i;
    this.getProduct();
  }
  next() {
    this.pageData.page++;
    this.getProduct();
  }

  onSelectedAll() {
    console.log(this.checked);
    if (this.checked) {
      this.data.product.items.forEach(item => {
        if (!item.isPromotion) {
          item.product_id = item._id;
          if (this.validateEditProduct(item)) {
            let index = this.productSelected.findIndex(e => {
              return e.product_id === item._id;
            });
            if (index === -1) {
              this.productSelected.push(item);
            }
          }
        }
      });
    } else {
      this.data.product.items.forEach(item => {
        item.product_id = item._id;
        if (!item.isPromotion) {
          if (this.validateEditProduct(item)) {
            let index = this.productSelected.findIndex(e => {
              return e.product_id === item._id;
            });

            if (index !== -1) {
              this.productSelected.splice(index, 1);
            }
          }
        }
      });
    }

    setTimeout(() => {
      this.onCheckSelectedAll();
    }, 0);
    this.emit();
  }

  onCheckSelectedAll() {
    this.checked = true;
    this.data.product.items.forEach(e => {
      let index = this.productSelected.findIndex(item => {
        return e._id === item.product_id;
      });
      if (index === -1) {
        this.checked = false;
      }
    });

    if (this.data.product.items.length === 0 && this.productSelected.length === 0) {
      this.checked = false;
    }
  }

  checkSelected(item) {
    let index = this.productSelected.filter(i => {
      return i.product_id === item._id;
    });

    if (!index[0]) {
      this.itemSelect = false;
      return false;
    } else {
      this.itemSelect = true;
      return true;
    }
  }

  onSelected(item) {
    item.product_id = item._id;
    if (this.validateEditProduct(item)) {
      let index = this.productSelected.findIndex(i => {
        return i._id === item.product_id;
      });

      if (index === -1 || this.productSelected.length === 0) {
        this.productSelected.push(item);
      } else {
        this.productSelected.splice(index, 1);
      }

      this.onCheckSelectedAll();
      this.emit();
    }
  }

  validateEditProduct(item) {
    let indexCopy = this.productSelectedCopy.findIndex(i => {
      return i._id === item.product_id;
    });

    if (indexCopy === -1) {
      return true;
    } else {
      return false;
    }
  }

  emit() {
    this.onSelectedProduct.emit(this.productSelected);
  }







}
