import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Injectable()
export class DataService {
  messageType = '';
  message = '';
  constructor(public http: HttpClient, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.message = '';
      }
    });
  }

  getUser() {
    return window.localStorage.getItem('user@furnover') ? JSON.parse(window.localStorage.getItem('user@furnover')) : null;
  }

  error(message) {
    this.messageType = 'danger';
    this.message = message;
  }

  success(message) {
    this.messageType = 'success';
    this.message = message;
  }

  warning(message) {
    this.messageType = 'warning';
    this.message = message;
  }

  info(message) {
    this.messageType = 'info';
    this.message = message;
  }

}
