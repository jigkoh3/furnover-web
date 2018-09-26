import { Component, OnInit, HostListener } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { Constants } from '../../app.constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isMenuIcon = true;
  userShop: any = {};
  shopname = '';
  @HostListener('window:resize') onResize() {
    this.onResizeDisplay();
  }

  constructor(
    public sidenavService: SidenavService
  ) {
    this.onResizeDisplay();
  }

  ngOnInit() {
  }

  isLogin() {
    const token = window.localStorage.getItem(Constants.URL() + '@token');
    const usershop = window.localStorage.getItem(Constants.URL() + '@usershop') ?
      JSON.parse(window.localStorage.getItem(Constants.URL() + '@usershop')) : {};
    if (token && usershop) {
      this.shopname = usershop.shop ? usershop.shop.name : '';
      return true;
    } else {
      return false;
    }
  }

  onResizeDisplay() {
    if (window.innerWidth > 800) {
      this.isMenuIcon = false;
    } else {
      this.isMenuIcon = true;
    }
  }

}
