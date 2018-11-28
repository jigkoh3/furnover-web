/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class StatusListComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
StatusListComponent.decorators = [
    { type: Component, args: [{
                selector: 'order-status-list',
                template: `<div class="row">
  <div class="col-12 col-md-4 col-sm-4">
    <mat-form-field>
      <mat-icon>search</mat-icon>
      <input name="search" matInput placeholder="ค้นหา">
    </mat-form-field>
  </div>
</div>
<div class="row" style="background-color: #f5f5f5;">
  <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" style="padding-bottom: 0px !important;">
    <p mat-subheader>สินค้าทั้งหมด</p>
  </div>
  <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-right" style="padding-bottom: 0px !important;">
    <p mat-subheader class="no-flex">ยอดคำสั่งซื้อทั้งหมด</p>
  </div>
  <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center" style="padding-bottom: 0px !important;">
    <p mat-subheader class="no-flex">สถานะ</p>
  </div>
  <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center" style="padding-bottom: 0px !important;">
    <p mat-subheader class="no-flex">กำลังจัดรายการ</p>
  </div>
</div>
<ng-content></ng-content>
`,
                styles: [`
  .img-shop {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
  `]
            },] },
];
/** @nocollapse */
StatusListComponent.ctorParameters = () => [];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmc2LW1hdC1vcmRlci8iLCJzb3VyY2VzIjpbImxpYi9zdGF0dXMtbGlzdC9zdGF0dXMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFvQ2xELE1BQU07SUFFSixpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F1Qlg7Z0JBQ0MsTUFBTSxFQUFFLENBQUM7Ozs7OztHQU1SLENBQUM7YUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29yZGVyLXN0YXR1cy1saXN0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLXNtLTRcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWljb24+c2VhcmNoPC9tYXQtaWNvbj5cbiAgICAgIDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLguITguYnguJnguKvguLJcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC00IGNvbC1zbS00IGNvbC1tZC00IGNvbC1sZy00IGNvbC14bC00XCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XCI+XG4gICAgPHAgbWF0LXN1YmhlYWRlcj7guKrguLTguJnguITguYnguLLguJfguLHguYnguIfguKvguKHguJQ8L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLTIgY29sLXNtLTIgY29sLW1kLTIgY29sLWxnLTIgY29sLXhsLTIgdGV4dC1yaWdodFwiIHN0eWxlPVwicGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1wiPlxuICAgIDxwIG1hdC1zdWJoZWFkZXIgY2xhc3M9XCJuby1mbGV4XCI+4Lii4Lit4LiU4LiE4Liz4Liq4Lix4LmI4LiH4LiL4Li34LmJ4Lit4LiX4Lix4LmJ4LiH4Lir4Lih4LiUPC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC0yIGNvbC1zbS0yIGNvbC1tZC0yIGNvbC1sZy0yIGNvbC14bC0yIHRleHQtY2VudGVyXCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XCI+XG4gICAgPHAgbWF0LXN1YmhlYWRlciBjbGFzcz1cIm5vLWZsZXhcIj7guKrguJbguLLguJnguLA8L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLTQgY29sLXNtLTQgY29sLW1kLTQgY29sLWxnLTQgY29sLXhsLTQgdGV4dC1jZW50ZXJcIiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcIj5cbiAgICA8cCBtYXQtc3ViaGVhZGVyIGNsYXNzPVwibm8tZmxleFwiPuC4geC4s+C4peC4seC4h+C4iOC4seC4lOC4o+C4suC4ouC4geC4suC4ozwvcD5cbiAgPC9kaXY+XG48L2Rpdj5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmAsXG4gIHN0eWxlczogW2BcbiAgLmltZy1zaG9wIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBTdGF0dXNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==