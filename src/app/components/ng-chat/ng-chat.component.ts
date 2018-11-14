import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/app.constants';
import { ChatService } from 'src/app/providers/chat-service/chat.service';

@Component({
  selector: 'app-ng-chat',
  templateUrl: './ng-chat.component.html',
  styleUrls: ['./ng-chat.component.css']
})
export class NgChatComponent implements OnInit {
  isMinimize = true;
  person: any = {};
  chat: string;
  conversationList: Array<any> = [];
  receiver = '';
  connection: any;
  user: any = {};
  chatList: Array<any> = [];
  constructor(private chatService: ChatService) {

  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem(Constants.URL() + '@usershop')) ?
      JSON.parse(localStorage.getItem(Constants.URL() + '@usershop')) : {}; // me
    this.user = user;
    this.getChatList();
    this.receiver = this.user.shop._id;
  }

  getChatList() {
    this.connection = this.chatService.getMessages().subscribe(data => {
      this.chatList = [];
      const chatList: any = data;
      const newChatList: Array<any> = [];
      chatList.forEach((chatEl, i) => {
        if (chatEl._id !== this.user.shop._id && chatEl.name !== this.user.shop.name) {
          newChatList.push(chatEl);
        }
      });

      chatList.forEach((chatEl, i) => {
        if (chatEl.ref) {
          const countEl = newChatList.filter(el => {
            return chatEl.ref._id === el._id;
          });
          if (countEl.length <= 0) {
            newChatList.push({
              dateTime: chatEl.dateTime,
              img: chatEl.ref.img,
              lastChat: chatEl.lastChat,
              name: chatEl.ref.username,
              _id: chatEl.ref._id
            });
          }
        }
      });
      this.chatList = newChatList;
      for (let i = 0; i < this.chatList.length; i++) {
        if (this.chatList[i]._id === this.user.shop._id) {
          this.chatList.splice(i, 1);
        }
      }
      if (this.chatList.length > 0) {
        this.person = this.chatList[0];
      }
      console.log(this.chatList);
    });
  }

  minimize() {
    if (this.isMinimize) {
      this.isMinimize = false;
      setTimeout(() => {
        const element = document.getElementById('box');
        element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      }, 200);
    } else {
      this.isMinimize = true;
    }
  }

  selectPerson(item) {
    this.person = item;
    const reqData: any = {
      sender: {
        _id: this.user.shop._id
      },
      receiver: {
        _id: item._id
      }
    };
    this.chatService.getChatDetailList(reqData).subscribe(data => {
      const dataArr: any = data;
      console.log(dataArr);
      this.conversationList = dataArr;
    });
  }

}
