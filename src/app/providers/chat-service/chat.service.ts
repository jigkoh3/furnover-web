import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/internal/Observable';
import { Constants } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // private url = Constants.URL() || 'http://localhost:3000';
  private url = 'http://localhost:3000';
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
      console.log(user);
    this.socket = io(this.url);
    this.socket.emit('init', { receiver: { _id: user.shop._id } });
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
