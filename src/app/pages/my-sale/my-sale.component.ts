import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-sale',
  templateUrl: './my-sale.component.html',
  styleUrls: ['./my-sale.component.css']
})
export class MySaleComponent implements OnInit {
  statusTab = [
    {
      name: "ทั้งหมด",
      status: "all"
    },
    {
      name: "ยังไม่ชำระ",
      status: "waitpayment"
    },
    {
      name: "ที่ต้องจัดส่ง",
      status: "waitshipping"
    },
    {
      name: "การจัดส่ง",
      status: "waitrecive"
    },
    {
      name: "สำเร็จ",
      status: "completed"
    }, {
      name: "ยกเลิก",
      status: "cancel"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
