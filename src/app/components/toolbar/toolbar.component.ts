import { Component, OnInit, HostListener } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isMenuIcon = true;
  noti = false;
  apps = false;
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

  toggleNoti() {
    this.apps = false;
    if (this.noti) {
      this.noti = false;
    } else {
      this.noti = true;
    }
  }

  toggleApps() {
    this.noti = false;
    if (this.apps) {
      this.apps = false;
    } else {
      this.apps = true;
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
