import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-button-go-back',
  templateUrl: './button-go-back.component.html',
  styleUrls: ['./button-go-back.component.css']
})
export class ButtonGoBackComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }
  onBack() {
    this.location.back();
  }
}
