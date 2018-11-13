import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   const element = document.getElementById('box');
    //   element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    // }, 400);

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
    }];

    this.receiver = '1';
  }

  minimize() {
    if (this.isMinimize) {
      this.isMinimize = false;
    } else {
      this.isMinimize = true;
    }
  }

  selectPerson(i) {
    this.person = i;
  }

}
