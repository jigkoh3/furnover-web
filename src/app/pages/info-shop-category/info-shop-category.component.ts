import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../app.constants';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalCompleteComponent } from '../modals/modal-complete/modal-complete.component';

@Component({
    selector: 'app-info-shop-category',
    templateUrl: './info-shop-category.component.html',
    styleUrls: ['./info-shop-category.component.css']
})
export class InfoShopCategoryComponent implements OnInit {
    categoryData: any = {
        name: 'กำหนดชื่อหมวดหมู่เอง',
        items: [],
        status: false
    };
    categoryCompele: Boolean = false;
    isCheckbtnSaveProduct: Boolean = false;
    categoryDataCopy: any = {
        items: []
    };
    getProduct: Array<any> = [];
    isEdit: Boolean = false;
    tabs: Array<any> = [];
    page: any = {
        shop_id: '',
        status: 'sell',
        name: '',
        page: 1,
        limit: 30
    };
    _formBuilder: any;
    constructor(
        public iconRegistry: MatIconRegistry,
        public sanitizer: DomSanitizer,
        public dialog: MatDialog,
        private restApi: RestApiService,
        private actRoute: ActivatedRoute,
        private spinner: NgxSpinnerService,
        private router: Router
    ) {
        iconRegistry.addSvgIcon(
            'done',
            sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-done-24px.svg')
        );
    }

    ngOnInit() {
        this.actRoute.queryParams.subscribe(params => {
            if (params['cateID']) {
                this.isEdit = false;
                this.categoryData._id = params['cateID'];
                this.getcategoryData();
            } else {
                this.isEdit = true;
            }
        });
        this.getDataProduct();
    }
    async getDataProduct() {
        this.spinner.show();

        try {
            const user: any = JSON.parse(
                window.localStorage.getItem(Constants.URL() + '@usershop')
            );
            this.page.shop_id = user.shop_id;
            const respone: any = await this.restApi.post(
                Constants.URL() + '/api/product-shop-list',
                this.page
            );
            this.spinner.hide();

            this.getProduct = respone.data.product.items;
        } catch (error) {
            this.spinner.hide();
        }
    }
    onSearch(event) {
        try {
            if (event.key === 'Enter') {
                this.getDataProduct();
            }
        } catch (error) { }
    }
    selectedItem(item) {
        try {
            item.product_id = item._id;
            this.categoryData.items.push(item);
            this.categoryCompele = false;
        } catch (error) {
            throw error;
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
        } catch (error) {
            throw error;
        }
    }
    checkButtonAdd(item) {
        try {
            const index = this.categoryData.items.findIndex(itm => {
                return itm._id === item._id;
            });
            if (index !== -1) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw error;
        }
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
                const respone: any = await this.restApi.put(
                    Constants.URL() + '/api/categoryShop/' + this.categoryData._id,
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
                const respone: any = await this.restApi.post(
                    Constants.URL() + '/api/categoryShop/',
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
            this.spinner.hide();
            this.dialog.open(ModalCompleteComponent, {
                width: '700px',
                data: { message: 'บันทึกชื่อหมวดหมู่สินค้าสำเร็จ' }
            });
        } catch (error) {
            this.spinner.hide();
        }
    }

    async onSaveCate() {
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
                const respone: any = await this.restApi.put(
                    Constants.URL() + '/api/categoryShop/' + this.categoryData._id,
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
                const respone: any = await this.restApi.post(
                    Constants.URL() + '/api/categoryShop/',
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
            this.spinner.hide();
            this.dialog.open(ModalCompleteComponent, {
                width: '700px',
                data: { message: 'บันทึกสินค้าสำเร็จ' }
            });
        } catch (error) {
            this.spinner.hide();
        }
    }


    async getcategoryData() {
        try {
            const resp: any = await this.restApi.get(
                Constants.URL() + '/api/categoryShop/' + this.categoryData._id
            );
            this.categoryData = resp.data;
            console.log(this.categoryData);
            this.categoryDataCopy = JSON.parse(JSON.stringify(this.categoryData));
        } catch (error) { throw error; }
    }
    onBack() {
        this.router.navigate(['/shop-category']);
    }

    async onUpdateOpenCategory() {
        this.spinner.show();
        this.categoryData.status = true;
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
                const respone: any = await this.restApi.put(
                    Constants.URL() + '/api/categoryShop/' + this.categoryData._id,
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
                const respone: any = await this.restApi.post(
                    Constants.URL() + '/api/categoryShop/',
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
            this.spinner.hide();
            this.dialog.open(ModalCompleteComponent, {
                width: '700px',
                data: { message: 'เปิดใช้งานหมวดหมู่สำเร็จ' }
            });
        } catch (error) {
            this.spinner.hide();
        }
    }

    async onChangeStatus() {
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
                const respone: any = await this.restApi.put(
                    Constants.URL() + '/api/categoryShop/' + this.categoryData._id,
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
                this.spinner.hide();
                this.dialog.open(ModalCompleteComponent, {
                    width: '700px',
                    data: { message: 'เปลี่ยนสถานะหมวดหมู่สำเร็จ' }
                });
            } else {
                this.categoryData.shop_id = this.page.shop_id;
                const respone: any = await this.restApi.post(
                    Constants.URL() + '/api/categoryShop/',
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

    checkLogProductChange() {
        let isRetrun = false;
        this.categoryDataCopy.items.forEach(item => {
            const index = this.categoryData.items.findIndex(cateItem => {
                return item.product_id === cateItem.product_id;
            });
            if (index === -1 || this.categoryData.items.length === 0) {
                isRetrun = true;
            }
        });

        this.categoryData.items.forEach(item => {
            const index = this.categoryDataCopy.items.findIndex(cateItem => {
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
