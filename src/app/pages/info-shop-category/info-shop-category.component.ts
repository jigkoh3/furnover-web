import { NgxSpinnerService } from "ngx-spinner";
import { async } from "@angular/core/testing";
import { Component, OnInit } from "@angular/core";
import { RestApiService } from "../../providers/rest-api-service/rest-api.service";
import { Constants } from "../../app.constants";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
// import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-info-shop-category",
    templateUrl: "./info-shop-category.component.html",
    styleUrls: ["./info-shop-category.component.css"]
})
export class InfoShopCategoryComponent implements OnInit {
    categoryData: any = {
        name: "กำหนดชื่อหมวดหมู่เอง",
        items: [],
        status: false
    };
    categoryCompele: boolean = false;
    isCheckbtnSaveProduct: boolean = false;
    categoryDataCopy: any = {
        items: []
    };
    getProduct: Array<any> = [];
    isEdit: boolean = false;
    tabs: Array<any> = [];
    page: any = {
        shop_id: "",
        status: "sell",
        name: "",
        page: 1,
        limit: 30
    };
    _formBuilder: any;
    constructor(
        public iconRegistry: MatIconRegistry,
        public sanitizer: DomSanitizer,
        private restApi: RestApiService,
        private actRoute: ActivatedRoute,
        private spinner: NgxSpinnerService,
        private router: Router
    ) {
        iconRegistry.addSvgIcon(
            "done",
            sanitizer.bypassSecurityTrustResourceUrl("assets/baseline-done-24px.svg")
        );
    }

    ngOnInit() {
        this.actRoute.queryParams.subscribe(params => {
            console.log(params);
            if (params["cateID"]) {
                this.isEdit = false;
                this.categoryData._id = params["cateID"];
                this.getcategoryData();
            } else {
                this.isEdit = true;
            }
        });
        this.getDataProduct();
        // this.saveName == this._formBuilder.group({
        //     name: ['', Validators.required]
        // });
    }
    async getDataProduct() {
        this.spinner.show();

        try {
            let user: any = JSON.parse(
                window.localStorage.getItem(Constants.URL() + "@usershop")
            );
            this.page.shop_id = user.shop_id;
            let respone: any = await this.restApi.post(
                Constants.URL() + "/api/product-shop-list",
                this.page
            );
            this.spinner.hide();

            this.getProduct = respone.data.products;
        } catch (error) {
            this.spinner.hide();
        }
    }
    onSearch(event) {
        try {
            if (event.key === "Enter") {
                this.getDataProduct();
            }
        } catch (error) { }
    }
    selectedItem(item) {
        // this.spinner.show();
        try {
            item.product_id = item._id;
            this.categoryData.items.push(item);
            this.categoryCompele = false;

            // this.spinner.hide();
        } catch (error) {
            // this.spinner.hide();
        }
    }
    deleteItem(i, item) {
        try {
            this.categoryData.items.splice(i, 1);
            this.categoryCompele = false;

            if (
                !this.categoryData.name ||
                (this.categoryData.items && this.categoryData.items.length === 0)
            ) {
                this.categoryData.status = false;
            }
        } catch (error) { }
    }
    checkButtonAdd(item) {
        try {
            let index = this.categoryData.items.findIndex(itm => {
                return itm._id === item._id;
            });

            if (index !== -1) {
                return true;
            } else {
                return false;
            }
        } catch (error) { }
    }
    async onSaveData() {
        this.spinner.show();
        try {
            if (
                this.categoryData.name &&
                this.categoryData.items &&
                this.categoryData.items.length === 0
            ) {
                this.categoryData.status = false;
            }

            if (this.categoryData._id) {
                this.categoryData.shop_id = this.page.shop_id;
                let respone: any = await this.restApi.put(
                    Constants.URL() + "/api/categoryShop/" + this.categoryData._id,
                    this.categoryData
                );
                this.categoryData = respone.data;
                this.getcategoryData();

                if (
                    this.categoryData.name &&
                    this.categoryData.items &&
                    this.categoryData.items.length > 0
                ) {
                    setTimeout(() => {
                        this.categoryCompele = true;
                    }, 500);
                }

                this.spinner.hide();
            } else {
                this.categoryData.shop_id = this.page.shop_id;
                let respone: any = await this.restApi.post(
                    Constants.URL() + "/api/categoryShop/",
                    this.categoryData
                );
                this.categoryData = respone.data;

                this.getcategoryData();
                if (
                    this.categoryData.name &&
                    this.categoryData.items &&
                    this.categoryData.items.length > 0
                ) {
                    setTimeout(() => {
                        this.categoryCompele = true;
                    }, 500);
                }
                this.spinner.hide();
            }
            this.isEdit = false;
        } catch (error) {
            this.spinner.hide();
        }
    }
    async getcategoryData() {
        try {
            var resp: any = await this.restApi.get(
                Constants.URL() + "/api/categoryShop/" + this.categoryData._id
            );

            this.categoryData = resp.data;
            this.categoryDataCopy = JSON.parse(JSON.stringify(this.categoryData));
        } catch (error) { }
    }
    onBack() {
        this.router.navigate(["/shop-category"]);
    }

    async onUpdateOpenCategory() {
        this.categoryData.status = true;
        await this.onSaveData();
    }

    async onChangeStatus() {
        await this.onSaveData();
    }

    checkLogProductChange() {
        let isRetrun = false;

        // console.log(this.categoryData.items);

        // if (this.categoryCompele) {
        //   isRetrun = false;
        // } else {
        //   isRetrun = true;
        // }
        // console.log(this.itemSeleted);
        this.categoryDataCopy.items.forEach(item => {
            let index = this.categoryData.items.findIndex(cateItem => {
                return item.product_id === cateItem.product_id;
            });
            //   console.log(this.categoryData.items)
            if (index === -1 || this.categoryData.items.length === 0) {
                isRetrun = true;
            }
        });

        this.categoryData.items.forEach(item => {
            let index = this.categoryDataCopy.items.findIndex(cateItem => {
                return item.product_id === cateItem.product_id;
            });

            if (index === -1 || this.categoryDataCopy.items.length === 0) {
                isRetrun = true;
            }
        });

        return isRetrun;
    }

    onRollbackItems() {
        this.categoryData = JSON.parse(JSON.stringify(this.categoryDataCopy));
    }
    previos() {
        this.page.page--;
        this.getDataProduct();
    }

    pageData(item) {
        if (this.page.page !== item) {
            this.page.page = item;
            this.getDataProduct();
        }
    }

    next() {
        this.page.page++;
        this.getDataProduct();
    }
}
