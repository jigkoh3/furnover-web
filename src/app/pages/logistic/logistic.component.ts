import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-logistic',
  templateUrl: './logistic.component.html',
  styleUrls: ['./logistic.component.css']
})
export class LogisticComponent implements OnInit {
  rule: any = {
    mode:''
  };
  device:boolean = true;
  blindData : any ;


  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'calendar',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-calendar_today-24px.svg'));
      iconRegistry.addSvgIcon(
        'shipping',
        sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-local_shipping-24px.svg'));
  }

  ngOnInit() {
    this.testjson();
  }

  testclick(){
    console.log(this.rule.mode);

  }

  testjson() {
   let response : any = {
    data : [{
      title : "Kerry นัดรับสินค้าจากร้านผู้ขาย",
      limit : "30",
      device: false
    },{
      title : "ThaiPost-EMS",
      limit : "20",
      device: true
    },{
      title : "ThaiPost - Registered Mail",
      limit : "2",
      device: false
    },{
      title : "Kerry รับส่งสินค้าที่สาขา",
      limit : "20",
      device: true
    }]
  }
  this.blindData = response.data;
}

}
