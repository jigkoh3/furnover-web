import { Component, ViewChild, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { SidenavService } from './components/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  mode: string = 'over';
  opened: boolean = false;

  @HostListener('window:resize') onResize() {
    this.onResizeDisplay();
  }

  constructor(
    public sidenavService: SidenavService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit() {
    this.sidenavService.appDrawer = this.appDrawer;
    this.onResizeDisplay();
  }

  onResizeDisplay() {
    if (window.innerWidth > 800) {
      this.mode = 'side';
      this.opened = true;
      this.changeDetectorRef.detectChanges();
    } else {
      this.mode = 'over';
      this.opened = false;
    }
  }

}
