import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-marketing',
  templateUrl: './menu-marketing.component.html',
  styleUrls: ['./menu-marketing.component.css']
})
export class MenuMarketingComponent implements OnInit {

  constructor(
    public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer,
    public router: Router
  ) {
    iconRegistry.addSvgIcon(
      'local_offer',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-local_offer-24px.svg'));
      
    iconRegistry.addSvgIcon(
      'promotion',
      sanitizer.bypassSecurityTrustResourceUrl('assets/marketing-center-promotion.svg'));

    iconRegistry.addSvgIcon(
      'coupons',
      sanitizer.bypassSecurityTrustResourceUrl('assets/marketing-center-coupons.svg'));

    iconRegistry.addSvgIcon(
      'campaign',
      sanitizer.bypassSecurityTrustResourceUrl('assets/marketing-center-campaign.svg'));
  }

  ngOnInit() {
  }

  openMyPromotion(){
    this.router.navigate(['/my-promotion']);
  }

  openMyCode(){
    this.router.navigate(['/my-code']);
  }
}
