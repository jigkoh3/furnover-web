import { Component, OnInit, HostListener } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { Constants } from '../../app.constants';
import { Router } from '@angular/router';

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
    public sidenavService: SidenavService,
    private router: Router
  ) {
    this.onResizeDisplay();
  }

  ngOnInit() {
  }

  isLogin() {
    const token = window.localStorage.getItem(Constants.URL() + '@token');
    const usershop = window.localStorage.getItem(Constants.URL() + '@user') ?
      JSON.parse(window.localStorage.getItem(Constants.URL() + '@user')) : {};
    if (token && usershop) {
      this.shopname = usershop ? usershop.username : '';
      return true;
    } else {
      return false;
    }
  }

  logout() {
    window.localStorage.removeItem(Constants.URL() + '@token');
    window.localStorage.removeItem(Constants.URL() + '@user');
    this.router.navigate(['auth/login']);
  }

  onResizeDisplay() {
    if (window.innerWidth > 800) {
      this.isMenuIcon = false;
    } else {
      this.isMenuIcon = true;
    }
  }

}
