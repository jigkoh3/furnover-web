import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalConfirmRemarkComponent } from '../../modals/modal-confirm-remark/modal-confirm-remark.component';
import { OrderService } from 'casan-order-test';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalCompleteComponent } from '../modals/modal-complete/modal-complete.component';


@Component({
  selector: 'app-my-sale',
  templateUrl: './my-sale.component.html',
  styleUrls: ['./my-sale.component.css']
})
export class MySaleComponent implements OnInit {
  statusTab = [
    {
      name: "ทั้งหมด",
      status: "all"
    },
    {
      name: "ยังไม่ชำระ",
      status: "waitpayment"
    },
    {
      name: "ที่ต้องจัดส่ง",
      status: "waitshipping"
    },
    {
      name: "การจัดส่ง",
      status: "waitrecive"
    },
    {
      name: "สำเร็จ",
      status: "completed"
    }, {
      name: "ยกเลิก",
      status: "cancel"
    }
  ]

  constructor(
    public route: Router,
    private orderService: OrderService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
  ) {
    this.orderService.loadData.subscribe(() => {
      this.spinner.show();
    });
    this.orderService.loadDataSuccess.subscribe(() => {
      this.spinner.hide();
    });
    this.orderService.openingModalWaitshipping.observers = [];
    this.orderService.openingModalWaitshipping.subscribe((order_id) => {
      // console.log(order_id);
      const dialogRef = this.dialog.open(ModalConfirmRemarkComponent, {
        width: "500px",
        data: { message: "ยืนยันการจัดส่ง?" },
        autoFocus: false
      });
      dialogRef.afterClosed().subscribe(async result => {
        // console.log(result);
        // console.log(`Dialog closed: ${result}`);
        const resultConfrim = result;
        if (resultConfrim === "confirm") {
          // console.log('confirm');
          this.orderService.openModalWaitshippingConfirm.emit(order_id);
          // console.log("object");
        }
      });
    });
    this.orderService.updateStatusCompelete.observers = [];
    this.orderService.updateStatusCompelete.subscribe(() => {
      const dialogRef = this.dialog.open(ModalCompleteComponent, {
        width: '500px',
        data: { message: 'ทำรายการสำเร็จ' },
        autoFocus: false
      });
    });
  }

  ngOnInit() {
  }

}
