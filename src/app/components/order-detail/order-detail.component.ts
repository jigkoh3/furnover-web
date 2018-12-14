import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Constants } from 'src/app/app.constants';
import { ModalConfirmRemarkComponent } from 'src/app/modals/modal-confirm-remark/modal-confirm-remark.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() role: String = '';
  @Input() shop_id: String = '';
  @Input() data: any = {};
  st: String = '';

  constructor(private dialog: MatDialog,
    private api: RestApiService,
    private spiner: NgxSpinnerService,
    private route: Router) {

  }

  ngOnInit() {
    setTimeout(() => {
      if (this.data && this.data.shop) {
        this.data.shop.products.forEach(product => {
          if (product.status === 'waitpayment') {
            this.st = 'waitpayment';
          } else if (product.status === 'waitapprove') {
            this.st = 'waitapprove';
          } else if (product.status === 'waitshipping') {
            this.st = 'waitshipping';
          } else if (product.status === 'waitreceive') {
            this.st = 'waitreceive';
          } else if (product.status === 'completed') {
            this.st = 'completed';
          }
        });
      }
    }, 1000);
  }

  shipping() {
    const dialogRef = this.dialog.open(ModalConfirmRemarkComponent, {
      width: '500px',
      data: { message: 'ยืนยันการจัดส่ง?' },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(async result => {
      if (result.confirm) {
        this.setShipping(result.remark);
      }
    });
  }

  async setShipping(remark) {
    this.spiner.show();
    try {

      const reqBody: any = {
        order_id: this.data.order_id,
        shop_id: this.shop_id,
        remark: remark
      };
      const res: any = await this.api.post(Constants.URL() + '/api/update-order-shipping', reqBody);
      this.spiner.hide();
      this.route.navigate(['my-sale']);
    } catch (error) {
      this.spiner.hide();
      throw error;
    }
  }

}
