import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/internal/Observable';
import { Constants } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // private url = Constants.URL();
  private url = 'http://localhost:3000'; // local
  private socket;
  constructor() {
    this.initSocket();
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  initSocket() {
    const user = JSON.parse(localStorage.getItem(Constants.URL() + '@usershop')) ?
      JSON.parse(localStorage.getItem(Constants.URL() + '@usershop')) : {};
    this.socket = io(this.url);
    this.socket.emit('init', { receiver: { _id: user.shop._id, role: 'shop' } });
    this.excList();
  }

  excList() {
    const observable = new Observable(observer => {
      this.socket.on('exc-list', (data) => {
        this.getMessages();
        observer.next(data);
      });
    });
    return observable;
  }

  getMessages() {
    this.initSocket();
    const observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }

  getChatDetailList(reqData) {
    const observable = new Observable(observer => {
      this.socket.emit('joined', reqData);
      this.socket.emit('chat-list', reqData);
      this.socket.on('chat-list', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }
}
