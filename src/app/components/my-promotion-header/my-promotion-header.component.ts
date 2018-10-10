import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-promotion-header',
  templateUrl: './my-promotion-header.component.html',
  styleUrls: ['./my-promotion-header.component.css']
})
export class MyPromotionHeaderComponent implements OnInit {
  myDate = new Date();
  constructor(

  ) { }

  ngOnInit() {
    this.getDataTest();
  }

  getDataTest() {
    let res = {
      status: "200",
      data: {
        title: "เทสส่วนลด",
        start_date: "1/5/16",
        end_date: "1/5/16",
        start_time: "9:05 AM",
        end_time: "9:05 PM"
      }
    }
  }

}
