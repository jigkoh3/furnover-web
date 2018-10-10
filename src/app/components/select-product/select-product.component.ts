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

  data: any = {
    tabs: []
  };

  pageData: any = {
    shop_id: "",
    status: "",
    name: "",
    page: 1,
    limit: 10
  };
  constructor(
    private spinner: NgxSpinnerService,
    private restApi: RestApiService,
    public dataService: DataService
  ) {}

  ngOnInit() {
    let user = window.localStorage.getItem(Constants.URL() + "@usershop")
      ? JSON.parse(window.localStorage.getItem(Constants.URL() + "@usershop"))
      : null;

    this.pageData.shop_id = user.shop_id;
    this.pageData.status = "all";

    this.getProduct();
  }

  async getProduct() {
    try {
      this.spinner.show();
      let data: any = await this.restApi.post(
        Constants.URL() + "/api/product-shop-list",
        this.pageData
      );
      this.spinner.hide();

      if (data["status"] === 200) {
        this.data = data.data;

        if (this.data.items && this.data.items.length === 0) {
          this.dataService.warning("ไม่พบข้อมูลสินค้า");
        }
      }
    } catch (error) {
      this.spinner.hide();
      this.dataService.error("โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง");
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
    if (this.checked) {
      this.productSelected = this.data.products;
    } else {
      this.productSelected = [];
    }
    this.emit();
  }

  onSelected(item) {
    let index = this.productSelected.filter(i => {
      return i._id === item._id;
    });

    if (!index[0]) {
      this.productSelected.push(item);
    } else {
      this.productSelected.splice(index, 1);
    }

    if (this.productSelected.length === this.data.products.length) {
      this.checked = true;
    } else {
      this.checked = false;
    }
    this.emit();
  }

  emit() {
    this.onSelectedProduct.emit(this.productSelected);
  }
}
