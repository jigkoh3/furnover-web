import { Component, OnInit } from '@angular/core';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalCreateBankAccountComponent } from 'src/app/pages/modals/modal-create-bank-account/modal-create-bank-account.component';
import { ModalInfoBankAccountComponent } from 'src/app/pages/modals/modal-info-bank-account/modal-info-bank-account.component';


@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  constructor(
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer,
    public dialog: MatDialog
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
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalCreateBankAccountComponent, {
      width: "700px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openmodal(): void {
    const dialogRef = this.dialog.open(ModalInfoBankAccountComponent, {
      width: "700px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
