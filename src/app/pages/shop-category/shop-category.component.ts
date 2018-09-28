import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css']
})
export class ShopCategoryComponent implements OnInit {

 modelDataOpen : any = {};
 modelDataClose : any = {};

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'del',
      sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/icons/del.svg'));
  }

  ngOnInit() {
    this.getCatClose();
    this.getcatOpen();
  }

  getcatOpen() {
    let response : any = {
      data : [{
        name : "เครื่องใช้ไฟฟ้า"
      },{
        name : "ของตกแต่ง"
      },{
        name : "เครื่องครัว"
      },{
        name : "ตู้เสื้อผ้า"
      }
    ]
    }
    this.modelDataOpen = response.data ;
  }

  getCatClose(){
    let response : any = {
      data : [{
        name : "เก้าอี้"
      },{
        name : "ชั้นวางของ"
      },{
        name : "โต๊ะ"
      },{
        name : "เตียง"
      }
    ]
    }
    this.modelDataClose = response.data ;
  }
}


