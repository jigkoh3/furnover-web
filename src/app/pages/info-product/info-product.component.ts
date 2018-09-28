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
    this.mainOptions.push(this.mainOptions.length);
  }

  delMainOption(idx) {
    this.mainOptions.splice(idx, 1);
  }



}
