import { Component, ViewChild, ElementRef, ChangeDetectorRef, HostListener, AfterViewInit, AfterViewChecked, OnInit } from '@angular/core';
import { SidenavService } from './components/sidenav/sidenav.service';
import * as firebase from 'firebase';
import { Constants } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterViewChecked, OnInit {



  @ViewChild('appDrawer') appDrawer: ElementRef;
  mode = 'over';
  opened = false;
  user: any = {};

  @HostListener('window:resize') onResize() {
    this.onResizeDisplay();
  }

  constructor(
    public sidenavService: SidenavService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.configFirebase();
  }

  ngOnInit() {
    var OneSignal = window['OneSignal'] || [];
    OneSignal.push(["init", {
      appId: "8699b515-3b1e-4735-ad43-b0e8082fcea8",
      autoRegister: false,
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: false
      }
    }]);
    console.log('OneSignal Initialized');
    OneSignal.push(function () {
      console.log('Register For Push');
      OneSignal.push(["registerForPushNotifications"])
    });
    OneSignal.push(function () {
      // Occurs when the user's subscription changes to a new value.
      OneSignal.on('subscriptionChange', function (isSubscribed) {
        console.log("The user's subscription state is now:", isSubscribed);
        OneSignal.getUserId().then(function (userId) {
          console.log("User ID is", userId);
        });
      });
    });
  
}

ngAfterViewChecked() {
  const user = JSON.parse(localStorage.getItem(Constants.URL() + '@user')) ?
    JSON.parse(localStorage.getItem(Constants.URL() + '@user')) : {};
  this.user = user;
}

ngAfterViewInit() {
  this.sidenavService.appDrawer = this.appDrawer;
  this.onResizeDisplay();
  const user = JSON.parse(localStorage.getItem(Constants.URL() + '@user')) ?
    JSON.parse(localStorage.getItem(Constants.URL() + '@user')) : {};
  this.user = user;
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

configFirebase() {
  const config = {
    apiKey: 'AIzaSyCanMutez3Coe6Yg4oEhEgzMK3iHEXauz0',
    authDomain: 'school-hub-37d55.firebaseapp.com',
    databaseURL: 'https://school-hub-37d55.firebaseio.com',
    projectId: 'school-hub-37d55',
    storageBucket: 'school-hub-37d55.appspot.com',
    messagingSenderId: '116012923728'
  };
  firebase.initializeApp(config);
}

}
