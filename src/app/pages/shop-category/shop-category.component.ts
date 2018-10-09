import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../app.constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../../providers/data-service/data.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css']
})
export class ShopCategoryComponent implements OnInit {

  modelData: any;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private router: Router,
    private restApi: RestApiService,
    private spinner: NgxSpinnerService,
    private dataService: DataService
  ) {
    iconRegistry.addSvgIcon(
      'del',
      sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/icons/del.svg'));
    iconRegistry.addSvgIcon(
      'drag',
      sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/icons/drag.svg'));
  }

  ngOnInit() {
    this.getCat();
  }

  async getCat() {
    this.spinner.show();
    try {
      const userShop: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
      let res: any = await this.restApi.post(Constants.URL() + '/api/my-category', { shop_id: userShop.shop._id });
      this.modelData = res.data;
      // console.log(this.modelData)
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.dataService.error('เรียกข้อมูลไม่สำเร็จ');
    }

  }

  getCattest() {
    let response: any = {
      data: [{
        name: "เก้าอี้",
        status: true,
        priority: "1"
      }, {
        name: "ชั้นวางของ",
        status: false,
        priority: "2"
      }, {
        name: "โต๊ะ",
        status: true,
        priority: "3"
      }
      ]
    }
    this.modelData = response.data;
  }

  infoCategory() {
    this.router.navigate(['/info-shop-category']);
  }

  editCategory(item) {
    this.router.navigate(['/info-shop-category'], { queryParams: { cateID: item._id } });
  }

  onChangeStatus(item) {
    this.updateCate(item);
  }

  async updateCate(item: any) {
    this.spinner.show();
    try {
      await this.restApi.put(Constants.URL() + '/api/categoryShop/' + item._id, item);
      this.getCat();
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.dataService.error('เรียกข้อมูลไม่สำเร็จ');
    }
  }

  async deleteCate(item) {
    //  console.log(item._id);
    this.spinner.show();
    try {
      await this.restApi.delete(Constants.URL() + '/api/categoryShop/' + item._id);
      this.getCat();
      this.spinner.hide();
      console.log(this.modelData)
    } catch (error) {
      this.spinner.hide();
      this.dataService.error('ลบข้อมูลไม่สำเร็จ');

    }
  }







}


