import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-status-list',
  templateUrl: './status-list.component.html',
  styles: [`
  .img-shop {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
  `]
})
export class StatusListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
