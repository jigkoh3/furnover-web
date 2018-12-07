import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-order-detail',
  templateUrl: './info-order-detail.component.html',
  styleUrls: ['./info-order-detail.component.css']
})
export class InfoOrderDetailComponent implements OnInit {
  orderID: String = '';
  data: any = {};
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        if (params['id']) {
          const orderID = params['id'];
          this.orderID = orderID;
        }
      });
  }

}
