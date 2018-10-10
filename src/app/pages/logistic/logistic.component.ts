import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../../providers/data-service/data.service';
import { RestApiService } from '../../providers/rest-api-service/rest-api.service';
import { Constants } from '../../app.constants';
import { ModalPrepareShippingComponent } from '../modals/modal-prepare-shipping/modal-prepare-shipping.component';

@Component({
  selector: 'app-logistic',
  templateUrl: './logistic.component.html',
  styleUrls: ['./logistic.component.scss']
})
export class LogisticComponent implements OnInit {
  rule: any = {
    mode: ''
  };
  mode: boolean = false;
  blindData: any;
  status: boolean = false;
  toggles: any = {
    statusToggles: ''
  };


  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public dataService: DataService,
    private restApi: RestApiService
  ) {
    iconRegistry.addSvgIcon(
      'calendar',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-calendar_today-24px.svg'));
    iconRegistry.addSvgIcon(
      'shipping',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-local_shipping-24px.svg'));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalPrepareShippingComponent, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit() {
    this.testjson();
    this.getDelivery();
  }

  async getDelivery() {
    // /api/masterlogistic
    this.spinner.show();
    try {
      let dataMaster: any = await this.restApi.get(Constants.URL() + '/api/masterlogistic');
      this.blindData = dataMaster.datas;
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.dataService.error('เรียกข้อมูลไม่สำเร็จ');
    }

  }

  testclick() {
    
  }

  async onToggleChange(e) {
    this.spinner.show();
    try {
      let user: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
      let request = {
        shop_id: user.shop_id,
        logistic_id: e._id,
        status: e.status
      };
      let response = await this.restApi.post(Constants.URL() + '/api/save-shop-logistic', request);
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      setTimeout(() => {
        this.dataService.error('บันทึกข้อมูลล้มเหลว');
      }, 3000);
    }
  }

  testjson() {
    //  let response : any = {
    //   data : [{
    //     title : "Kerry นัดรับสินค้าจากร้านผู้ขาย",
    //     limit : "30",
    //     device: false
    //   },{
    //     title : "ThaiPost-EMS",
    //     limit : "20",
    //     device: true
    //   },{
    //     title : "ThaiPost - Registered Mail",
    //     limit : "2",
    //     device: false
    //   },{
    //     title : "Kerry รับส่งสินค้าที่สาขา",
    //     limit : "20",
    //     device: true
    //   }]
    // }
    // this.blindData = response.data;
  }

}
