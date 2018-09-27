import { Component, OnInit } from '@angular/core';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BankComponent } from 'src/app/pages/modals/bank/bank.component';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  constructor(
    public  iconRegistry: MatIconRegistry,
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

  }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(BankComponent, {
      width: '700px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}}
