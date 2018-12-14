(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('ng6-mat-order', ['exports', '@angular/core', '@angular/material'], factory) :
    (factory((global['ng6-mat-order'] = {}),global.ng.core,global.ng.material));
}(this, (function (exports,i0,material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OrderService = (function () {
        function OrderService() {
        }
        OrderService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        OrderService.ctorParameters = function () { return []; };
        /** @nocollapse */ OrderService.ngInjectableDef = i0.defineInjectable({ factory: function OrderService_Factory() { return new OrderService(); }, token: OrderService, providedIn: "root" });
        return OrderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OrderComponent = (function () {
        function OrderComponent() {
        }
        /**
         * @return {?}
         */
        OrderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        OrderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'order-Order',
                        template: "\n    <p>\n      order works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        OrderComponent.ctorParameters = function () { return []; };
        return OrderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ListComponent = (function () {
        function ListComponent() {
        }
        /**
         * @return {?}
         */
        ListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'order-list',
                        template: "<order-status-list>\n    <order-detail>\n        <order-detail-item></order-detail-item>\n    </order-detail>\n</order-status-list>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        ListComponent.ctorParameters = function () { return []; };
        return ListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var StatusListComponent = (function () {
        function StatusListComponent() {
        }
        /**
         * @return {?}
         */
        StatusListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        StatusListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'order-status-list',
                        template: "<div class=\"row\">\n  <div class=\"col-12 col-md-4 col-sm-4\">\n    <mat-form-field>\n      <mat-icon>search</mat-icon>\n      <input name=\"search\" matInput placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\">\n    </mat-form-field>\n  </div>\n</div>\n<div class=\"row\" style=\"background-color: #f5f5f5;\">\n  <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\" style=\"padding-bottom: 0px !important;\">\n    <p mat-subheader>\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14</p>\n  </div>\n  <div class=\"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-right\" style=\"padding-bottom: 0px !important;\">\n    <p mat-subheader class=\"no-flex\">\u0E22\u0E2D\u0E14\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14</p>\n  </div>\n  <div class=\"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center\" style=\"padding-bottom: 0px !important;\">\n    <p mat-subheader class=\"no-flex\">\u0E2A\u0E16\u0E32\u0E19\u0E30</p>\n  </div>\n  <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center\" style=\"padding-bottom: 0px !important;\">\n    <p mat-subheader class=\"no-flex\">\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E31\u0E14\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23</p>\n  </div>\n</div>\n<ng-content></ng-content>\n",
                        styles: ["\n  .img-shop {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n}\n  "]
                    },] },
        ];
        /** @nocollapse */
        StatusListComponent.ctorParameters = function () { return []; };
        return StatusListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DetailComponent = (function () {
        function DetailComponent() {
        }
        /**
         * @return {?}
         */
        DetailComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        DetailComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'order-detail',
                        template: "<div class=\"row\">XXXXX</div>\n<ng-content></ng-content>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        DetailComponent.ctorParameters = function () { return []; };
        return DetailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DetailItemComponent = (function () {
        function DetailItemComponent() {
        }
        /**
         * @return {?}
         */
        DetailItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        DetailItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'order-detail-item',
                        template: "<div class=\"row border-shop\">\n  <div class=\"col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8\">\n    <img class=\"img-shop\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5dtjQzlb-ItjmdBpCb8rlchKq2RwN-tBrSpRJFRWiN1VkY0RWg\">\n    <p  class=\"no-flex\">\u0E23\u0E49\u0E32\u0E19\u0E40\u0E1E\u0E35\u0E22\u0E27\u0E40\u0E2D\u0E07\u0E07\u0E07</p>\n  </div>\n  <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center\">\n    <p  class=\"no-flex\">\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D 1100501307564</p>\n  </div>\n</div>\n\n<div class=\"row border-shop\">\n  <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-left\">\n    <p  class=\"no-flex subheader\">\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E19\u0E49\u0E2D\u0E07\u0E2B\u0E21\u0E32</p><br>\n    <p  class=\"no-flex\">\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32:\u0E40\u0E1A\u0E2D\u0E23\u0E4C 6 \u0E41\u0E02\u0E19\u0E2A\u0E31\u0E49\u0E19</p>\n  </div>\n  <div class=\"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-right\">\n    <div class=\"row no-padding-top\">\n      <div class=\"col-4 text-center no-padding-top\">\n        <p  class=\"no-flex\">x1</p>\n      </div>\n      <div class=\"col-8 text-center no-padding-top\">\n        <p class=\"no-flex color-theme font-bold\">\u0E3F250</p><br>\n        <p  class=\"no-flex payment-type-font\">\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19\u0E1C\u0E48\u0E32\u0E19\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center\">\n    <p  class=\"no-flex color-success font-bold\">\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E41\u0E25\u0E49\u0E27</p>\n  </div>",
                        styles: [".img-shop{width:30px;height:30px;border-radius:50%}.no-flex{display:unset!important}.border-shop{border-bottom:1px solid #f2f2f2!important}.subheader{font-size:.1rem!important}"]
                    },] },
        ];
        /** @nocollapse */
        DetailItemComponent.ctorParameters = function () { return []; };
        return DetailItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OrderModule = (function () {
        function OrderModule() {
        }
        OrderModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            material.MatCardModule,
                            material.MatFormFieldModule,
                            material.MatIconModule,
                            material.MatInputModule,
                        ],
                        declarations: [OrderComponent, ListComponent, StatusListComponent, DetailComponent, DetailItemComponent],
                        exports: [OrderComponent, ListComponent, StatusListComponent]
                    },] },
        ];
        return OrderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.OrderService = OrderService;
    exports.OrderComponent = OrderComponent;
    exports.ListComponent = ListComponent;
    exports.StatusListComponent = StatusListComponent;
    exports.OrderModule = OrderModule;
    exports.ɵb = DetailItemComponent;
    exports.ɵa = DetailComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LW1hdC1vcmRlci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nNi1tYXQtb3JkZXIvbGliL29yZGVyLnNlcnZpY2UudHMiLCJuZzovL25nNi1tYXQtb3JkZXIvbGliL29yZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmc2LW1hdC1vcmRlci9saWIvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vbmc2LW1hdC1vcmRlci9saWIvc3RhdHVzLWxpc3Qvc3RhdHVzLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9uZzYtbWF0LW9yZGVyL2xpYi9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC50cyIsIm5nOi8vbmc2LW1hdC1vcmRlci9saWIvZGV0YWlsLWl0ZW0vZGV0YWlsLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9uZzYtbWF0LW9yZGVyL2xpYi9vcmRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPcmRlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcmRlci1PcmRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBvcmRlciB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3JkZXItbGlzdCcsXG4gIHRlbXBsYXRlOiBgPG9yZGVyLXN0YXR1cy1saXN0PlxyXG4gICAgPG9yZGVyLWRldGFpbD5cclxuICAgICAgICA8b3JkZXItZGV0YWlsLWl0ZW0+PC9vcmRlci1kZXRhaWwtaXRlbT5cclxuICAgIDwvb3JkZXItZGV0YWlsPlxyXG48L29yZGVyLXN0YXR1cy1saXN0PmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29yZGVyLXN0YXR1cy1saXN0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLXNtLTRcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWljb24+c2VhcmNoPC9tYXQtaWNvbj5cbiAgICAgIDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDoMK4woTDoMK5wonDoMK4wpnDoMK4wqvDoMK4wrJcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC00IGNvbC1zbS00IGNvbC1tZC00IGNvbC1sZy00IGNvbC14bC00XCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XCI+XG4gICAgPHAgbWF0LXN1YmhlYWRlcj7DoMK4wqrDoMK4wrTDoMK4wpnDoMK4woTDoMK5wonDoMK4wrLDoMK4wpfDoMK4wrHDoMK5wonDoMK4wofDoMK4wqvDoMK4wqHDoMK4wpQ8L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLTIgY29sLXNtLTIgY29sLW1kLTIgY29sLWxnLTIgY29sLXhsLTIgdGV4dC1yaWdodFwiIHN0eWxlPVwicGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1wiPlxuICAgIDxwIG1hdC1zdWJoZWFkZXIgY2xhc3M9XCJuby1mbGV4XCI+w6DCuMKiw6DCuMKtw6DCuMKUw6DCuMKEw6DCuMKzw6DCuMKqw6DCuMKxw6DCucKIw6DCuMKHw6DCuMKLw6DCuMK3w6DCucKJw6DCuMKtw6DCuMKXw6DCuMKxw6DCucKJw6DCuMKHw6DCuMKrw6DCuMKhw6DCuMKUPC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC0yIGNvbC1zbS0yIGNvbC1tZC0yIGNvbC1sZy0yIGNvbC14bC0yIHRleHQtY2VudGVyXCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XCI+XG4gICAgPHAgbWF0LXN1YmhlYWRlciBjbGFzcz1cIm5vLWZsZXhcIj7DoMK4wqrDoMK4wpbDoMK4wrLDoMK4wpnDoMK4wrA8L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLTQgY29sLXNtLTQgY29sLW1kLTQgY29sLWxnLTQgY29sLXhsLTQgdGV4dC1jZW50ZXJcIiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcIj5cbiAgICA8cCBtYXQtc3ViaGVhZGVyIGNsYXNzPVwibm8tZmxleFwiPsOgwrjCgcOgwrjCs8OgwrjCpcOgwrjCscOgwrjCh8OgwrjCiMOgwrjCscOgwrjClMOgwrjCo8OgwrjCssOgwrjCosOgwrjCgcOgwrjCssOgwrjCozwvcD5cbiAgPC9kaXY+XG48L2Rpdj5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmAsXG4gIHN0eWxlczogW2BcbiAgLmltZy1zaG9wIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBTdGF0dXNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29yZGVyLWRldGFpbCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInJvd1wiPlhYWFhYPC9kaXY+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcmRlci1kZXRhaWwtaXRlbScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInJvdyBib3JkZXItc2hvcFwiPlxuICA8ZGl2IGNsYXNzPVwiY29sLTggY29sLXNtLTggY29sLW1kLTggY29sLWxnLTggY29sLXhsLThcIj5cbiAgICA8aW1nIGNsYXNzPVwiaW1nLXNob3BcIiBzcmM9XCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NTSDVkdGpRemxiLUl0am1kQnBDYjhybGNoS3EyUndOLXRCclNwUkpGUldpTjFWa1kwUldnXCI+XG4gICAgPHAgIGNsYXNzPVwibm8tZmxleFwiPsOgwrjCo8OgwrnCicOgwrjCssOgwrjCmcOgwrnCgMOgwrjCnsOgwrjCtcOgwrjCosOgwrjCp8OgwrnCgMOgwrjCrcOgwrjCh8OgwrjCh8OgwrjChzwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtNCBjb2wtc20tNCBjb2wtbWQtNCBjb2wtbGctNCBjb2wteGwtNCB0ZXh0LWNlbnRlclwiPlxuICAgIDxwICBjbGFzcz1cIm5vLWZsZXhcIj7DoMK4wqvDoMK4wqHDoMK4wrLDoMK4wqLDoMK5woDDoMK4wqXDoMK4woLDoMK4woTDoMK4wrPDoMK4wqrDoMK4wrHDoMK5wojDoMK4wofDoMK4wovDoMK4wrfDoMK5wonDoMK4wq0gMTEwMDUwMTMwNzU2NDwvcD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInJvdyBib3JkZXItc2hvcFwiPlxuICA8ZGl2IGNsYXNzPVwiY29sLTQgY29sLXNtLTQgY29sLW1kLTQgY29sLWxnLTQgY29sLXhsLTQgdGV4dC1sZWZ0XCI+XG4gICAgPHAgIGNsYXNzPVwibm8tZmxleCBzdWJoZWFkZXJcIj7DoMK5woDDoMK4wqrDoMK4wrfDoMK5wonDoMK4wq3DoMK4wpnDoMK5wonDoMK4wq3DoMK4wofDoMK4wqvDoMK4wqHDoMK4wrI8L3A+PGJyPlxuICAgIDxwICBjbGFzcz1cIm5vLWZsZXhcIj7DoMK4wpXDoMK4wrHDoMK4wqfDoMK5woDDoMK4wqXDoMK4wrfDoMK4wq3DoMK4woHDoMK4wqrDoMK4wrTDoMK4wpnDoMK4woTDoMK5wonDoMK4wrI6w6DCucKAw6DCuMKaw6DCuMKtw6DCuMKjw6DCucKMIDYgw6DCucKBw6DCuMKCw6DCuMKZw6DCuMKqw6DCuMKxw6DCucKJw6DCuMKZPC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC0yIGNvbC1zbS0yIGNvbC1tZC0yIGNvbC1sZy0yIGNvbC14bC0yIHRleHQtcmlnaHRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IG5vLXBhZGRpbmctdG9wXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgdGV4dC1jZW50ZXIgbm8tcGFkZGluZy10b3BcIj5cbiAgICAgICAgPHAgIGNsYXNzPVwibm8tZmxleFwiPngxPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTggdGV4dC1jZW50ZXIgbm8tcGFkZGluZy10b3BcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJuby1mbGV4IGNvbG9yLXRoZW1lIGZvbnQtYm9sZFwiPsOgwrjCvzI1MDwvcD48YnI+XG4gICAgICAgIDxwICBjbGFzcz1cIm5vLWZsZXggcGF5bWVudC10eXBlLWZvbnRcIj7DoMK5woLDoMK4wq3DoMK4wpnDoMK5woDDoMK4wofDoMK4wrTDoMK4wpnDoMK4wpzDoMK5wojDoMK4wrLDoMK4wpnDoMK4wprDoMK4wrHDoMK4wo3DoMK4worDoMK4wrXDoMK4wpjDoMK4wpnDoMK4wrLDoMK4woTDoMK4wrLDoMK4wqM8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtMiBjb2wtc20tMiBjb2wtbWQtMiBjb2wtbGctMiBjb2wteGwtMiB0ZXh0LWNlbnRlclwiPlxuICAgIDxwICBjbGFzcz1cIm5vLWZsZXggY29sb3Itc3VjY2VzcyBmb250LWJvbGRcIj7DoMK4wqrDoMK4wrPDoMK5woDDoMK4wqPDoMK5wofDoMK4wojDoMK5woHDoMK4wqXDoMK5wonDoMK4wqc8L3A+XG4gIDwvZGl2PmAsXG4gIHN0eWxlczogW2AuaW1nLXNob3B7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDtib3JkZXItcmFkaXVzOjUwJX0ubm8tZmxleHtkaXNwbGF5OnVuc2V0IWltcG9ydGFudH0uYm9yZGVyLXNob3B7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2YyZjJmMiFpbXBvcnRhbnR9LnN1YmhlYWRlcntmb250LXNpemU6LjFyZW0haW1wb3J0YW50fWBdXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9yZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGF0dXNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zdGF0dXMtbGlzdC9zdGF0dXMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IERldGFpbENvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlsL2RldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGV0YWlsSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlsLWl0ZW0vZGV0YWlsLWl0ZW0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW09yZGVyQ29tcG9uZW50LCBMaXN0Q29tcG9uZW50LCBTdGF0dXNMaXN0Q29tcG9uZW50LCBEZXRhaWxDb21wb25lbnQsIERldGFpbEl0ZW1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbT3JkZXJDb21wb25lbnQsIExpc3RDb21wb25lbnQsIFN0YXR1c0xpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzJCQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQixpQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLDZDQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7OzZCQVZEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQixnQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZBLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLHFJQUlTO3dCQUNuQixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7NEJBVkQ7Ozs7Ozs7QUNBQTtRQXNDRTtTQUFpQjs7OztRQUVqQixzQ0FBUTs7O1lBQVI7YUFDQzs7b0JBdkNGQSxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsUUFBUSxFQUFFLDB4Q0F1Qlg7d0JBQ0MsTUFBTSxFQUFFLENBQUMsc0ZBTVIsQ0FBQztxQkFDSDs7OztrQ0FuQ0Q7Ozs7Ozs7QUNBQTtRQVVFO1NBQWlCOzs7O1FBRWpCLGtDQUFROzs7WUFBUjthQUNDOztvQkFYRkEsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsMkRBQ2M7d0JBQ3hCLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDYjs7Ozs4QkFQRDs7Ozs7OztBQ0FBO1FBcUNFO1NBQWlCOzs7O1FBRWpCLHNDQUFROzs7WUFBUjthQUNDOztvQkF0Q0ZBLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixRQUFRLEVBQUUscXdEQTRCSDt3QkFDUCxNQUFNLEVBQUUsQ0FBQyxrTEFBa0wsQ0FBQztxQkFDN0w7Ozs7a0NBbENEOzs7Ozs7O0FDQUE7Ozs7b0JBUUNDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLHNCQUFhOzRCQUNiQywyQkFBa0I7NEJBQ2xCQyxzQkFBYTs0QkFDYkMsdUJBQWM7eUJBQ2Y7d0JBQ0QsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLENBQUM7d0JBQ3hHLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLENBQUM7cUJBQzlEOzswQkFqQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9