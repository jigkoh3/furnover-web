import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.scss']
})
export class MyProductComponent implements OnInit {
  sortModel: any = [
    {
      sortId: 0,
      sortName: 'ล่าสุด'
    },
    {
      sortId: 1,
      sortName: 'สินค้าขายดี'
    },
    {
      sortId: 2,
      sortName: 'ราคา'
    }
  ];
  sortIndex: Number = 0;
  constructor(
    public route: Router
  ) { }

  ngOnInit() {
  }

  selectSortIndex(item, i) {
    this.sortIndex = i;
  }

  gotoCreateProduct() {
    this.route.navigate(['/info-product']);
  }

}
