import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-my-promotion-list',
  templateUrl: './my-promotion-list.component.html',
  styleUrls: ['./my-promotion-list.component.css']
})
export class MyPromotionListComponent implements OnInit {
  @Input() data: any = {};
  @Output() outputData = new EventEmitter();
  // data: Array<any> = [];

  constructor(
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'del',
      sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/icons/del.svg'));
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    console.log(this.data)
    // const respone = {
    //   datas: [
    //     {
    //       name: 'เสื้อผ้า',
    //       limitsell: '0',
    //       img: 'https://doublegoose.com/wp-content/uploads/2014/03/doublegoose-crewneck-333n-bl.png',
    //       prices: [{
    //         oldprice: '130',
    //         newprice: '100',
    //         discount: '10',
    //         choice: true,
    //         namechoice: 'เสื้อสีดำ'
    //       }, {
    //         oldprice: '130',
    //         newprice: '100',
    //         discount: '10',
    //         choice: true,
    //         namechoice: 'เสื้อสีดำ'
    //       }]
    //     }
    //   ]
    // };
    // this.data = respone.datas;
  }

  changeData(e) {
    this.outputData.emit(this.data);
  }

  swapPrice(e, priceType, indexProduct, index, price) {
    if (priceType === 'cash') {
      const percentByprice = ((price - e) / price * 100);
      this.data.products[indexProduct].prices[index].percentage = percentByprice;
    } else if (priceType === 'percent') {
      const priceBypercent = (price * e) / 100;
      this.data.products[indexProduct].prices[index].newprice = price - priceBypercent;
    }
    this.outputData.emit(this.data);
  }

  delProduct(i) {
    const confirm = window.confirm('ยืนยันการลบสินค้า');
    if (confirm) {
      this.data.products.splice(i, 1);
    }
  }
}
