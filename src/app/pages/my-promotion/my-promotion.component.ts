import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Constants } from '../../app.constants';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { DataService } from '../../providers/data-service/data.service';
import { MatDialog } from '@angular/material';
import { ModalDeleteMyPromotionComponent } from '../modals/modal-delete-my-promotion/modal-delete-my-promotion.component';

@Component({
  selector: 'app-my-promotion',
  templateUrl: './my-promotion.component.html',
  styleUrls: ['./my-promotion.component.scss']
})
export class MyPromotionComponent implements OnInit {
  tabs: any = ['กำลังจะมา', 'กำลังดำเนินการ', 'หมดอายุแล้ว'];
  data: any = [];
  constructor(
    public route: Router,
    public restApi: RestApiService,
    public dataService: DataService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) {
    console.log(this.tabs)
  }

  ngOnInit() {
    this.getPromotion();
  }

  onLinkClick(event) {
    console.log(event)
  }

  onCreatePromotion() {
    this.route.navigate(['/info-my-promotion']);
  }

  onDetail(item) {
    this.route.navigate(['/info-my-promotion'], { queryParams: { itemId: item._id } });
  }

  onDelete(item): void {
    const dialogRef = this.dialog.open(ModalDeleteMyPromotionComponent, {
      width: '700px',
      hasBackdrop: true,
      // data: JSON.parse(JSON.stringify(this.selectedProduct))
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      } else {

      }
    });
  }


  async getPromotion() {
    this.spinner.show();
    let shop = window.localStorage.getItem(Constants.URL() + '@usershop') ? JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : null;
    let object = {
      shop_id: shop.shop_id,
      status: 'all',
      name: '',
      page: 1,
      limit: 30
    };
    try {
      let res: any = await this.restApi.post(Constants.URL() + '/api/discount-list', object);
      if (res['status'] === 200) {
        this.spinner.hide();
        console.log(res);
        this.data = res.datas;
        // if (this.data && this.data.length === 0) {
        //   this.dataService.warning('ไม่พบข้อมูลสินค้า');
        // }
      }
      // this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.dataService.error("โหลดข้อมูลล้มเหลว กรุณาลองใหม่อีกครั้ง")
    }
  }

}
