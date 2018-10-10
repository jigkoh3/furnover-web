import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalSelectProductComponent } from '../modals/modal-select-product/modal-select-product.component';

@Component({
  selector: 'app-my-promotion',
  templateUrl: './my-promotion.component.html',
  styleUrls: ['./my-promotion.component.css']
})
export class MyPromotionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModalAddProduct() {
    const dialogRef = this.dialog.open(ModalSelectProductComponent, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

}
