import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-marketing',
  templateUrl: './menu-marketing.component.html',
  styleUrls: ['./menu-marketing.component.css']
})
export class MenuMarketingComponent implements OnInit {

  constructor(
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'local_offer',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-local_offer-24px.svg'));
   }

  ngOnInit() {
  }

}
