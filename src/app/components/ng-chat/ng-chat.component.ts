import { Component, OnInit, OnDestroy } from '@angular/core';
import { Constants } from 'src/app/app.constants';
import { ChatService } from 'src/app/providers/chat-service/chat.service';
@Component({
  selector: 'app-ng-chat',
  templateUrl: './ng-chat.component.html',
  styleUrls: ['./ng-chat.component.css']
})
export class NgChatComponent implements OnInit, OnDestroy {
  isMinimize = true;
  person: any = {};
  chat: string;
  conversationList: Array<any> = [];
  receiver = '';
  connection: any;
  user: any = {};
  chatList: Array<any> = [];
  message = '';
  badge = 0;
  constructor(private chatService: ChatService) {

  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem(Constants.URL() + '@usershop')) ?
      JSON.parse(localStorage.getItem(Constants.URL() + '@usershop')) : {}; // me
    this.user = user;
    this.getChatList();
    this.receiver = this.user.shop._id;
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  getChatList() {
    this.connection = this.chatService.getMessages().subscribe(data => {
      this.chatList = [];
      const chatList: any = data;
      this.chatList = chatList;
      const newChatList: Array<any> = [];
      const uniqChat: Array<any> = [];
      chatList.forEach((chatEl, i) => {
        if (chatEl._id === this.user.shop._id && chatEl.ref) {
          chatEl._id = chatEl.ref._id._id;
          chatEl.img = chatEl.ref._id.profileImageURL;
          chatEl.name = chatEl.ref._id.displayname;
        }
      });

      chatList.forEach((chatEl, i) => {
        if (uniqChat.indexOf(chatEl._id) === -1) {
          uniqChat.push(chatEl._id);
          newChatList.push(chatEl);
        }
      });

      this.chatList = newChatList;

      // chatList.forEach((chatEl, i) => {
      //   if (chatEl.ref) {
      //     const countEl = newChatList.filter(el => {
      //       return chatEl.ref._id === el._id;
      //     });
      //     if (countEl.length <= 0) {
      //       newChatList.push({
      //         dateTime: chatEl.dateTime,
      //         img: chatEl.ref._id.profileImageURL ? chatEl.ref._id.profileImageURL : '',
      //         lastChat: chatEl.lastChat,
      //         name: chatEl.ref._id.displayname,
      //         _id: chatEl.ref._id._id
      //       });
      //     }
      //   }
      // });

      // this.chatList = newChatList;
      // for (let i = 0; i < this.chatList.length; i++) {
      //   if (this.chatList[i]._id === this.user.shop._id) {
      //     this.chatList.splice(i, 1);
      //   }
      // }
      // console.log(this.chatList);

    });

    this.connection = this.chatService.excList().subscribe(data => { });
    this.connection = this.chatService.getUnRead().subscribe(data => {
      const badge: any = data;
      this.badge = badge;
    });
  }

  minimize() {
    if (this.isMinimize) {
      this.isMinimize = false;
      setTimeout(() => {
        const element = document.getElementById('box');
        element.scrollIntoView({ behavior: 'instant', block: 'end', inline: 'nearest' });
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
      },
      seat: 'shop'
    };
    this.chatService.getChatDetailList(reqData).subscribe(data => {
      const dataArr: any = data;
      this.conversationList = dataArr;
    });
    setTimeout(() => {
      const element = document.getElementById('box');
      element.scrollIntoView({ behavior: 'instant', block: 'end', inline: 'nearest' });
    }, 200);
  }

  sendMessage(e) {
    if (this.message) {
      const sender: any = {
        _id: this.user.shop._id,
        role: 'shop'
      };
      const data = {
        name: this.person.name,
        sender: sender,
        receiver: {
          _id: this.person._id,
          role: 'member'
        },
        message: this.message
      };
      this.chatService.sendMessage(data);
      this.message = '';
    }
  }

}
