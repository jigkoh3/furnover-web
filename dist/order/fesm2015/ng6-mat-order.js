import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class OrderService {
    constructor() { }
}
OrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
OrderService.ctorParameters = () => [];
/** @nocollapse */ OrderService.ngInjectableDef = defineInjectable({ factory: function OrderService_Factory() { return new OrderService(); }, token: OrderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class OrderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
OrderComponent.decorators = [
    { type: Component, args: [{
                selector: 'order-Order',
                template: `
    <p>
      order works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
OrderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ListComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'order-list',
                template: `<order-status-list>
    <order-detail>
        <order-detail-item></order-detail-item>
    </order-detail>
</order-status-list>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ListComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class StatusListComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DetailComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'order-detail',
                template: `<div class="row">XXXXX</div>
<ng-content></ng-content>`,
                styles: [``]
            },] },
];
/** @nocollapse */
DetailComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DetailItemComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DetailItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'order-detail-item',
                template: `<div class="row border-shop">
  <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
    <img class="img-shop" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5dtjQzlb-ItjmdBpCb8rlchKq2RwN-tBrSpRJFRWiN1VkY0RWg">
    <p  class="no-flex">ร้านเพียวเองงง</p>
  </div>
  <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center">
    <p  class="no-flex">หมายเลขคำสั่งซื้อ 1100501307564</p>
  </div>
</div>

<div class="row border-shop">
  <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-left">
    <p  class="no-flex subheader">เสื้อน้องหมา</p><br>
    <p  class="no-flex">ตัวเลือกสินค้า:เบอร์ 6 แขนสั้น</p>
  </div>
  <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-right">
    <div class="row no-padding-top">
      <div class="col-4 text-center no-padding-top">
        <p  class="no-flex">x1</p>
      </div>
      <div class="col-8 text-center no-padding-top">
        <p class="no-flex color-theme font-bold">฿250</p><br>
        <p  class="no-flex payment-type-font">โอนเงินผ่านบัญชีธนาคาร</p>
      </div>
    </div>
  </div>
  <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center">
    <p  class="no-flex color-success font-bold">สำเร็จแล้ว</p>
  </div>`,
                styles: [`.img-shop{width:30px;height:30px;border-radius:50%}.no-flex{display:unset!important}.border-shop{border-bottom:1px solid #f2f2f2!important}.subheader{font-size:.1rem!important}`]
            },] },
];
/** @nocollapse */
DetailItemComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class OrderModule {
}
OrderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatCardModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatInputModule,
                ],
                declarations: [OrderComponent, ListComponent, StatusListComponent, DetailComponent, DetailItemComponent],
                exports: [OrderComponent, ListComponent, StatusListComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { OrderService, OrderComponent, ListComponent, StatusListComponent, OrderModule, DetailItemComponent as ɵb, DetailComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LW1hdC1vcmRlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmc2LW1hdC1vcmRlci9saWIvb3JkZXIuc2VydmljZS50cyIsIm5nOi8vbmc2LW1hdC1vcmRlci9saWIvb3JkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZzYtbWF0LW9yZGVyL2xpYi9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9uZzYtbWF0LW9yZGVyL2xpYi9zdGF0dXMtbGlzdC9zdGF0dXMtbGlzdC5jb21wb25lbnQudHMiLCJuZzovL25nNi1tYXQtb3JkZXIvbGliL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZzYtbWF0LW9yZGVyL2xpYi9kZXRhaWwtaXRlbS9kZXRhaWwtaXRlbS5jb21wb25lbnQudHMiLCJuZzovL25nNi1tYXQtb3JkZXIvbGliL29yZGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29yZGVyLU9yZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG9yZGVyIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcmRlci1saXN0JyxcbiAgdGVtcGxhdGU6IGA8b3JkZXItc3RhdHVzLWxpc3Q+XHJcbiAgICA8b3JkZXItZGV0YWlsPlxyXG4gICAgICAgIDxvcmRlci1kZXRhaWwtaXRlbT48L29yZGVyLWRldGFpbC1pdGVtPlxyXG4gICAgPC9vcmRlci1kZXRhaWw+XHJcbjwvb3JkZXItc3RhdHVzLWxpc3Q+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3JkZXItc3RhdHVzLWxpc3QnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtc20tNFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtaWNvbj5zZWFyY2g8L21hdC1pY29uPlxuICAgICAgPGlucHV0IG5hbWU9XCJzZWFyY2hcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOgwrjChMOgwrnCicOgwrjCmcOgwrjCq8OgwrjCslwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicm93XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1wiPlxuICA8ZGl2IGNsYXNzPVwiY29sLTQgY29sLXNtLTQgY29sLW1kLTQgY29sLWxnLTQgY29sLXhsLTRcIiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcIj5cbiAgICA8cCBtYXQtc3ViaGVhZGVyPsOgwrjCqsOgwrjCtMOgwrjCmcOgwrjChMOgwrnCicOgwrjCssOgwrjCl8OgwrjCscOgwrnCicOgwrjCh8OgwrjCq8OgwrjCocOgwrjClDwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtMiBjb2wtc20tMiBjb2wtbWQtMiBjb2wtbGctMiBjb2wteGwtMiB0ZXh0LXJpZ2h0XCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XCI+XG4gICAgPHAgbWF0LXN1YmhlYWRlciBjbGFzcz1cIm5vLWZsZXhcIj7DoMK4wqLDoMK4wq3DoMK4wpTDoMK4woTDoMK4wrPDoMK4wqrDoMK4wrHDoMK5wojDoMK4wofDoMK4wovDoMK4wrfDoMK5wonDoMK4wq3DoMK4wpfDoMK4wrHDoMK5wonDoMK4wofDoMK4wqvDoMK4wqHDoMK4wpQ8L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLTIgY29sLXNtLTIgY29sLW1kLTIgY29sLWxnLTIgY29sLXhsLTIgdGV4dC1jZW50ZXJcIiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcIj5cbiAgICA8cCBtYXQtc3ViaGVhZGVyIGNsYXNzPVwibm8tZmxleFwiPsOgwrjCqsOgwrjClsOgwrjCssOgwrjCmcOgwrjCsDwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtNCBjb2wtc20tNCBjb2wtbWQtNCBjb2wtbGctNCBjb2wteGwtNCB0ZXh0LWNlbnRlclwiIHN0eWxlPVwicGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1wiPlxuICAgIDxwIG1hdC1zdWJoZWFkZXIgY2xhc3M9XCJuby1mbGV4XCI+w6DCuMKBw6DCuMKzw6DCuMKlw6DCuMKxw6DCuMKHw6DCuMKIw6DCuMKxw6DCuMKUw6DCuMKjw6DCuMKyw6DCuMKiw6DCuMKBw6DCuMKyw6DCuMKjPC9wPlxuICA8L2Rpdj5cbjwvZGl2PlxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYCxcbiAgc3R5bGVzOiBbYFxuICAuaW1nLXNob3Age1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFN0YXR1c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3JkZXItZGV0YWlsJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicm93XCI+WFhYWFg8L2Rpdj5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29yZGVyLWRldGFpbC1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicm93IGJvcmRlci1zaG9wXCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtOCBjb2wtc20tOCBjb2wtbWQtOCBjb2wtbGctOCBjb2wteGwtOFwiPlxuICAgIDxpbWcgY2xhc3M9XCJpbWctc2hvcFwiIHNyYz1cImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1NINWR0alF6bGItSXRqbWRCcENiOHJsY2hLcTJSd04tdEJyU3BSSkZSV2lOMVZrWTBSV2dcIj5cbiAgICA8cCAgY2xhc3M9XCJuby1mbGV4XCI+w6DCuMKjw6DCucKJw6DCuMKyw6DCuMKZw6DCucKAw6DCuMKew6DCuMK1w6DCuMKiw6DCuMKnw6DCucKAw6DCuMKtw6DCuMKHw6DCuMKHw6DCuMKHPC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC00IGNvbC1zbS00IGNvbC1tZC00IGNvbC1sZy00IGNvbC14bC00IHRleHQtY2VudGVyXCI+XG4gICAgPHAgIGNsYXNzPVwibm8tZmxleFwiPsOgwrjCq8OgwrjCocOgwrjCssOgwrjCosOgwrnCgMOgwrjCpcOgwrjCgsOgwrjChMOgwrjCs8OgwrjCqsOgwrjCscOgwrnCiMOgwrjCh8OgwrjCi8OgwrjCt8OgwrnCicOgwrjCrSAxMTAwNTAxMzA3NTY0PC9wPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwicm93IGJvcmRlci1zaG9wXCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtNCBjb2wtc20tNCBjb2wtbWQtNCBjb2wtbGctNCBjb2wteGwtNCB0ZXh0LWxlZnRcIj5cbiAgICA8cCAgY2xhc3M9XCJuby1mbGV4IHN1YmhlYWRlclwiPsOgwrnCgMOgwrjCqsOgwrjCt8OgwrnCicOgwrjCrcOgwrjCmcOgwrnCicOgwrjCrcOgwrjCh8OgwrjCq8OgwrjCocOgwrjCsjwvcD48YnI+XG4gICAgPHAgIGNsYXNzPVwibm8tZmxleFwiPsOgwrjClcOgwrjCscOgwrjCp8OgwrnCgMOgwrjCpcOgwrjCt8OgwrjCrcOgwrjCgcOgwrjCqsOgwrjCtMOgwrjCmcOgwrjChMOgwrnCicOgwrjCsjrDoMK5woDDoMK4wprDoMK4wq3DoMK4wqPDoMK5wowgNiDDoMK5woHDoMK4woLDoMK4wpnDoMK4wqrDoMK4wrHDoMK5wonDoMK4wpk8L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLTIgY29sLXNtLTIgY29sLW1kLTIgY29sLWxnLTIgY29sLXhsLTIgdGV4dC1yaWdodFwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tcGFkZGluZy10b3BcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCB0ZXh0LWNlbnRlciBuby1wYWRkaW5nLXRvcFwiPlxuICAgICAgICA8cCAgY2xhc3M9XCJuby1mbGV4XCI+eDE8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOCB0ZXh0LWNlbnRlciBuby1wYWRkaW5nLXRvcFwiPlxuICAgICAgICA8cCBjbGFzcz1cIm5vLWZsZXggY29sb3ItdGhlbWUgZm9udC1ib2xkXCI+w6DCuMK/MjUwPC9wPjxicj5cbiAgICAgICAgPHAgIGNsYXNzPVwibm8tZmxleCBwYXltZW50LXR5cGUtZm9udFwiPsOgwrnCgsOgwrjCrcOgwrjCmcOgwrnCgMOgwrjCh8OgwrjCtMOgwrjCmcOgwrjCnMOgwrnCiMOgwrjCssOgwrjCmcOgwrjCmsOgwrjCscOgwrjCjcOgwrjCisOgwrjCtcOgwrjCmMOgwrjCmcOgwrjCssOgwrjChMOgwrjCssOgwrjCozwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC0yIGNvbC1zbS0yIGNvbC1tZC0yIGNvbC1sZy0yIGNvbC14bC0yIHRleHQtY2VudGVyXCI+XG4gICAgPHAgIGNsYXNzPVwibm8tZmxleCBjb2xvci1zdWNjZXNzIGZvbnQtYm9sZFwiPsOgwrjCqsOgwrjCs8OgwrnCgMOgwrjCo8OgwrnCh8OgwrjCiMOgwrnCgcOgwrjCpcOgwrnCicOgwrjCpzwvcD5cbiAgPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5pbWctc2hvcHt3aWR0aDozMHB4O2hlaWdodDozMHB4O2JvcmRlci1yYWRpdXM6NTAlfS5uby1mbGV4e2Rpc3BsYXk6dW5zZXQhaW1wb3J0YW50fS5ib3JkZXItc2hvcHtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZjJmMmYyIWltcG9ydGFudH0uc3ViaGVhZGVye2ZvbnQtc2l6ZTouMXJlbSFpbXBvcnRhbnR9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFN0YXR1c0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3N0YXR1cy1saXN0L3N0YXR1cy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZXRhaWxJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWwtaXRlbS9kZXRhaWwtaXRlbS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbT3JkZXJDb21wb25lbnQsIExpc3RDb21wb25lbnQsIFN0YXR1c0xpc3RDb21wb25lbnQsIERldGFpbENvbXBvbmVudCwgRGV0YWlsSXRlbUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPcmRlckNvbXBvbmVudCwgTGlzdENvbXBvbmVudCwgU3RhdHVzTGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7SUFhRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ1ZEO0lBYUUsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7cUJBSVM7Z0JBQ25CLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7Ozs7Ozs7QUNWRDtJQXNDRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F1Qlg7Z0JBQ0MsTUFBTSxFQUFFLENBQUM7Ozs7OztHQU1SLENBQUM7YUFDSDs7Ozs7Ozs7O0FDbkNEO0lBVUUsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7MEJBQ2M7Z0JBQ3hCLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7Ozs7Ozs7QUNQRDtJQXFDRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTRCSDtnQkFDUCxNQUFNLEVBQUUsQ0FBQyxrTEFBa0wsQ0FBQzthQUM3TDs7Ozs7Ozs7O0FDbENEOzs7WUFRQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ3hHLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLENBQUM7YUFDOUQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==