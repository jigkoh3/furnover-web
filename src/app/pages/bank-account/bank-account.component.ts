import { Component, OnInit } from '@angular/core';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalCreateBankAccountComponent } from 'src/app/pages/modals/modal-create-bank-account/modal-create-bank-account.component';
import { ModalInfoBankAccountComponent } from 'src/app/pages/modals/modal-info-bank-account/modal-info-bank-account.component';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { Constants } from 'src/app/app.constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/providers/data-service/data.service';


@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {
  showDataBank: Array<any> = []

  constructor(
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private dataService: DataService,
    private restApi: RestApiService
  ) {
    iconRegistry.addSvgIcon(
      'baseline-add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-add-24px.svg')),
      iconRegistry.addSvgIcon(
        'baseline-payment',
        sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-payment-24px.svg')),
      iconRegistry.addSvgIcon(
        'baseline-done',
        sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-done-24px.svg')),
      iconRegistry.addSvgIcon(
        'baseline-check',
        sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-check_circle-24px.svg'));
    iconRegistry.addSvgIcon(
      'shipping',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-local_shipping-24px.svg'));
  }

  ngOnInit() {
    this.getDatabank();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalCreateBankAccountComponent, {
      width: "700px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.getDatabank();
      }
    });
  }
  openmodal(item): void {
    const dialogRef = this.dialog.open(ModalInfoBankAccountComponent, {
      width: "700px",
      data: { _id: item._id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getDatabank();
      }
    });
  }
  async getDatabank() {
    this.spinner.show();

    try {
      let user: any = JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop'));
      let data = {
        shop_id: user.shop_id
      }
      let respone: any = await this.restApi.post(Constants.URL() + '/api/bank-account-shop', data);
      this.showDataBank = respone.datas;
      this.spinner.hide();

      console.log(respone);

    } catch (error) {
      this.spinner.hide();
      this.dataService.error('เรียกข้อมูลไม่สำเร็จ');

    }


  }
}
