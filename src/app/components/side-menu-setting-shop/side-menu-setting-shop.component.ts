import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// export interface RouteInfo {
//   path: string;
//   title: any;
// }
// export const ROUTES: RouteInfo[] = [
//   {
//     path: 'profile', title: ['โปรไฟล์']
//   },
// ];
@Component({
  selector: 'side-menu-setting-shop',
  templateUrl: './side-menu-setting-shop.component.html',
  styleUrls: ['./side-menu-setting-shop.component.scss']
})
export class SideMenuSettingShopComponent implements OnInit {
  // public menuItems: any[];
  constructor(private router: Router) {

  }

  ngOnInit() {
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
    // console.log(this.menuItems);
  }

}
