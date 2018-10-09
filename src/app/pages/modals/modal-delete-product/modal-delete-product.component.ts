import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestApiService } from '../../../providers/rest-api-service/rest-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../../../providers/data-service/data.service';
import { Constants } from '../../../app.constants';
@Component({
  selector: 'modal-delete-product',
  templateUrl: './modal-delete-product.component.html',
  styleUrls: ['./modal-delete-product.component.scss']
})
export class ModalDeleteProductComponent implements OnInit {
  products: any = [];
  constructor(
    private restApi: RestApiService,
    private spinner: NgxSpinnerService,
    private dataService: DataService,
    public dialogRef: MatDialogRef<ModalDeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.products = data;
    console.log(this.products)

  }

  ngOnInit() {
  }
  async delete() {
    this.spinner.show();
    let data = {
      product_ids: []
    }
    if (this.products) {
      this.products.forEach(product => {
        data.product_ids.push(product._id);
      });
    }

    try {
      let res: any = await this.restApi.post(Constants.URL() + '/api/product-delete/', data);
      if (res['status'] === 200) {
        this.dialogRef.close(res);
        this.spinner.hide();
      }
    } catch (errer) {
      this.spinner.hide();
      this.dataService.error('ลบสินค้าล้มเหลว กรุณาลองอีกครั้ง');
      setTimeout(() => {
        this.dataService.error('');
      }, 2000);
    }
  }
}
