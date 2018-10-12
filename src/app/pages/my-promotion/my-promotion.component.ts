import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Constants } from '../../app.constants';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { DataService } from '../../providers/data-service/data.service';
import { MatDialog } from '@angular/material';
import { ModalDeleteMyPromotionComponent } from '../modals/modal-delete-my-promotion/modal-delete-my-promotion.component';
import { ModalMessageComponent } from '../modals/modal-message/modal-message.component';

@Component({
  selector: 'app-my-promotion',
  templateUrl: './my-promotion.component.html',
  styleUrls: ['./my-promotion.component.scss']
})
export class MyPromotionComponent implements OnInit {
  data: any = {
    discounts: [],
    status: [],
    tabs: []
  };

  statusArray: any = [];

  status: any = 'all';
  tabs: any = [];
  pageData: any = {
    shop_id: "",
    status: "",
    name: "",
    page: 1,
    limit: 30
  };
  constructor(
    public route: Router,
    public restApi: RestApiService,
    public dataService: DataService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getStatus();
  }

  async getStatus() {
    this.spinner.show();
    let shop = window.localStorage.getItem(Constants.URL() + '@usershop') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;
    let objectData = {
      shop_id: shop.shop_id,
      status: this.status,
      name: this.pageData.name,
      page: this.pageData.page,
      limit: this.pageData.limit
    };
    try {
      let res: any = await this.restApi.post(Constants.URL() + '/api/discount-list', objectData);
      if (res['status'] === 200) {
        this.statusArray = res.data.status;

        this.spinner.hide();
        this.getPromotion();
      }
    } catch (error) {
      this.spinner.hide();
      this.dataService.error("โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }

  search(event) {
    if (event.keyCode == 13) {
      this.pageData.page = 1;
      this.getPromotion();
    }
  }

  onLinkClick(event) {
    this.pageData.page = 1;
    if (this.statusArray && this.statusArray.length > 0) {
      this.status = this.statusArray[event.index].status;
    }
    console.log(this.status);
    this.getPromotion();
  }

  onCreatePromotion() {
    this.route.navigate(['/info-my-promotion']);
  }

  onDetail(item) {
    this.route.navigate(['/info-my-promotion'], { queryParams: { itemId: item._id } });
  }
  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  onDelete(item): void {
    let newDate = new Date(item.startdate);
    let getTime = newDate.getTime();
    let Hour = newDate.getHours() + 1;
    let chkTime = newDate.setHours(Hour);

    if (chkTime > getTime) {
      const dialogRef = this.dialog.open(ModalDeleteMyPromotionComponent, {
        width: '500px',
        // background-color: 'red',
        hasBackdrop: true,
        data: JSON.parse(JSON.stringify(item))
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.getPromotion();
        }
      });
    } else {
      let text = 'โปรโมชั่นนี้ยังไม่สามารถลบได้';
      const dialogRef = this.dialog.open(ModalMessageComponent, {
        width: '500px',
        hasBackdrop: true,
        data: { message: text }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {

        }
      });
    }
  }

  async getPromotion() {
    this.dataService.warning('');
    this.spinner.show();
    const shop = window.localStorage.getItem(Constants.URL() + '@usershop') ?
      JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;
    let objectData = {
      shop_id: shop.shop_id,
      status: this.status,
      name: this.pageData.name,
      page: this.pageData.page,
      limit: this.pageData.limit
    };
    try {
      const res: any = await this.restApi.post(Constants.URL() + '/api/discount-list', objectData);
      if (res['status'] === 200) {
        this.data = res.data;
        this.tabs = this.data.tabs;
        this.spinner.hide();
        console.log(this.data);
        if (this.data && this.data.discounts.length === 0) {
          this.dataService.warning('ไม่พบข้อมูลโปรโมชั่น');
        }
      }
    } catch (error) {
      this.spinner.hide();
      this.dataService.error('โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง');
    }
  }

  previos() {
    this.pageData.page--;
    this.getPromotion();
  }

  page(item) {
    if (this.pageData.page !== item) {
      this.pageData.page = item;
      this.getPromotion();
    }
  }

  next() {
    this.pageData.page++;
    this.getPromotion();
  }

}
