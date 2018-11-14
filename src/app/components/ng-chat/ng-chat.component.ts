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
  person = 0;
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






    this.conversationList = [{
      _id: '11111', // ลูกค้า
      user: {
        _id: '1',
        img: 'https://www.pngarts.com/files/3/Avatar-Transparent-Image.png'
      },
      chat: 'สวัสดีครับ มีของหรือเปล่าครับ',
      dateTime: 'วันนี้, 11:30 น.'
    },
    {
      _id: '22222', // เจ้าของร้าน
      user: {
        _id: '2',
        img: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
      },
      chat: 'สวัสดีค่ะ มีสินค้าค่ะ',
      dateTime: 'วันนี้, 13:00 น.'
    },
    {
      _id: '22222', // เจ้าของร้าน
      user: {
        _id: '2',
        img: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
      },
      // tslint:disable-next-line:max-line-length
      chat: '** Samsung สวัสดีค่ะ สอบถามสินค้า หรือบริการ กรุณารอสักครู่ .. เนื่องจากมีผู้สอบถามเข้ามาจำนวนมาก เจ้าหน้าที่จะรีบติดต่อกลับโดยเร็ว ขอบคุณค่ะ... THANK YOU!! (สินค้าน้ำหนักเกิน 30 กิโลขึ้นไป กรุงเทพฯ และ ปริมณฑล ส่งฟรี!! )...',
      dateTime: 'วันนี้, 13:00 น.'
    },
    {
      _id: '22222', // เจ้าของร้าน
      user: {
        _id: '2',
        img: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
      },
      chat: 'สวัสดีค่ะ มีสินค้าค่ะ',
      dateTime: 'วันนี้, 13:00 น.'
    },
    {
      _id: '22222', // เจ้าของร้าน
      user: {
        _id: '2',
        img: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
      },
      chat: 'สวัสดีค่ะ มีสินค้าค่ะ',
      dateTime: 'วันนี้, 13:00 น.'
    },
    {
      _id: '22222', // เจ้าของร้าน
      user: {
        _id: '2',
        img: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
      },
      chat: 'สวัสดีค่ะ มีสินค้าค่ะ',
      dateTime: 'วันนี้, 13:00 น.'
    },
    {
      _id: '22222', // เจ้าของร้าน
      user: {
        _id: '2',
        img: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
      },
      chat: 'สวัสดีค่ะ มีสินค้าค่ะ',
      dateTime: 'วันนี้, 13:00 น.'
    },
    {
      _id: '22222', // เจ้าของร้าน
      user: {
        _id: '2',
        img: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
      },
      chat: 'สวัสดีค่ะ มีสินค้าค่ะ',
      dateTime: 'วันนี้, 13:00 น.'
    },
    {
      _id: '22222', // เจ้าของร้าน
      user: {
        _id: '2',
        img: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
      },
      chat: 'สวัสดีค่ะ มีสินค้าค่ะ',
      dateTime: 'วันนี้, 13:00 น.'
    },
    {
      _id: '22222', // เจ้าของร้าน
      user: {
        _id: '2',
        img: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
      },
      chat: 'สวัสดีค่ะ มีสินค้าค่ะ',
      dateTime: 'วันนี้, 13:00 น.'
    },
    {
      _id: '22222', // เจ้าของร้าน
      user: {
        _id: '2',
        img: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
      },
      chat: 'สวัสดีค่ะ มีสินค้าค่ะ',
      dateTime: 'วันนี้, 13:00 น.'
    }];
    this.receiver = '1';
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

  selectPerson(i) {
    this.person = i;
  }

}
