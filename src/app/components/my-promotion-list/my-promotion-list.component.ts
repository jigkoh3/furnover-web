import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-my-promotion-list',
  templateUrl: './my-promotion-list.component.html',
  styleUrls: ['./my-promotion-list.component.css']
})
export class MyPromotionListComponent implements OnInit {


  data: Array<any> = [

  ];


  constructor(
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer ) {
    iconRegistry.addSvgIcon(
      "cancel",
      sanitizer.bypassSecurityTrustResourceUrl("assets/baseline-cancel-24px.svg")
    );
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    let respone = {
      datas: [
        {
          name: 'เสื้อผ้า',
          limitsell: '0',
          img: 'https://doublegoose.com/wp-content/uploads/2014/03/doublegoose-crewneck-333n-bl.png',
          prices: [{
            oldprice: '130',
            newprice: '100',
            discount: '10',
            choice: true,
            namechoice: 'เสื้อสีดำ'
          },
          {
            oldprice: '120',
            newprice: '100',
            discount: '10',
            choice: true,
            namechoice: 'เสื้อสีดำ'
          }]
        }, {
          name: 'กางเกง',
          limitsell: '0',
          img: 'https://doublegoose.com/wp-content/uploads/2014/03/doublegoose-crewneck-333n-bl.png',
          prices: [{
            oldprice: '130',
            newprice: '100',
            discount: '10',
            choice: true,
            namechoice: 'เสื้อสีดำ'
          },
          {
            oldprice: '120',
            newprice: '100',
            discount: '10',
            choice: true,
            namechoice: 'เสื้อสีดำ'
          }]
        }
      ]
    };
    this.data = respone.datas;
  }
}
