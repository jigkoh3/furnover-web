import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css']
})
export class MyProductComponent implements OnInit {

  constructor(
    public route: Router
  ) { }

  ngOnInit() {
  }

  gotoCreateProduct() {
    this.route.navigate(['/info-product']);
  }

}
