import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-chat',
  templateUrl: './ng-chat.component.html',
  styleUrls: ['./ng-chat.component.css']
})
export class NgChatComponent implements OnInit {
  isMinimize = true;
  constructor() { }

  ngOnInit() {
  }

  minimize() {
    if (this.isMinimize) {
      this.isMinimize = false;
    } else {
      this.isMinimize = true;
    }
  }

}
