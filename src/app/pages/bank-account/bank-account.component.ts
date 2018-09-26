import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'baseline-add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-add-24px.svg')),
      iconRegistry.addSvgIcon(
        'baseline-payment',
        sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-payment-24px.svg')),
        iconRegistry.addSvgIcon(
          'baseline-done',
          sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-done-24px.svg'));
  }

  ngOnInit() {
  }

}
