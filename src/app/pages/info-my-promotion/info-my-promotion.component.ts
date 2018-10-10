import { Component, OnInit } from '@angular/core';
import { ModalSelectProductComponent } from '../modals/modal-select-product/modal-select-product.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-info-my-promotion',
  templateUrl: './info-my-promotion.component.html',
  styleUrls: ['./info-my-promotion.component.css']
})
export class InfoMyPromotionComponent implements OnInit {
  data: any = {
    _id: '1234',
    shop_id: '001',
    title: 'ลด 10%',
    start_date: '',
    start_time: '',
    end_date: '',
    end_time: '',
    products: [{
      product_id: '001',
      name: 'โต๊ะ',
      image: { url: '001.jpg' },
      prices: [{
        name: 'ปกติ',
        price: 100,
        newprice: 80,
        percentage: 20,
        isuse: true,
        stock: 5
      }],
      qty: 5
    }],
    status: 'soon'
  };
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModalAddProduct() {
    const dialogRef = this.dialog.open(ModalSelectProductComponent, {
      width: '700px',
      data: { products: [], status: 'sell' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

}
