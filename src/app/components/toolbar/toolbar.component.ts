import { Component, OnInit, HostListener } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { Constants } from '../../app.constants';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/providers/rest-api-service/rest-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private router: Router,
    private restApi: RestApiService,
    private spinner: NgxSpinnerService
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

  async logout() {
    this.spinner.show();
    try {
      const oneSignal: any = window.localStorage.getItem('@oneSignal');
      if (oneSignal) {
        const reqBody: any = {
          userid: oneSignal ? oneSignal : ''
        };
        const res: any = await this.restApi.post(Constants.URL() + '/api/auth/onesignal-delete', reqBody);
        window.localStorage.removeItem(Constants.URL() + '@token');
        window.localStorage.removeItem(Constants.URL() + '@user');
        this.router.navigate(['auth/login']);
        this.spinner.hide();
      } else {
        window.localStorage.removeItem(Constants.URL() + '@token');
        window.localStorage.removeItem(Constants.URL() + '@user');
        this.router.navigate(['auth/login']);
        this.spinner.hide();
      }
    } catch (error) {
      this.spinner.hide();
      throw error;
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
