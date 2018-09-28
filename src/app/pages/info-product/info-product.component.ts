import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent implements OnInit {
  isOptions = false;
  mainOptions: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  createOptions() {
    this.isOptions = true;
    this.mainOptions.push({
      main: new Date().getTime(),
      sub: []
    });
    console.log(this.mainOptions);
  }

  createSubOption(idx) {
    const sub: Array<any> = this.mainOptions[idx].sub;
    if (sub.length < 20) {
      sub.push(new Date().getTime());
      this.mainOptions[idx].sub = sub;
    }
    console.log(this.mainOptions);
  }

  delSubOption(idx, sub_id) {
    console.log(idx, sub_id);
    const sub: Array<any> = this.mainOptions[idx].sub;
    sub.splice(sub_id, 1);
    if (sub.length < 20) {
      this.mainOptions[idx].sub = sub;
    }
    console.log(this.mainOptions);
  }

  delMainOption(idx) {
    this.mainOptions.splice(idx, 1);
    if (this.mainOptions.length <= 0) {
      this.isOptions = false;
    }
    console.log(this.mainOptions);
  }



}
