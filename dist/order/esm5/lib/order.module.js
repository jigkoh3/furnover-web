/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { ListComponent } from './list/list.component';
import { StatusListComponent } from './status-list/status-list.component';
import { MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { DetailComponent } from './detail/detail.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
var OrderModule = /** @class */ (function () {
    function OrderModule() {
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
    return OrderModule;
}());
export { OrderModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmc2LW1hdC1vcmRlci8iLCJzb3VyY2VzIjpbImxpYi9vcmRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7O2dCQUV6RSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLENBQUM7b0JBQ3hHLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLENBQUM7aUJBQzlEOztzQkFqQkQ7O1NBa0JhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFN0YXR1c0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3N0YXR1cy1saXN0L3N0YXR1cy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZXRhaWxJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWwtaXRlbS9kZXRhaWwtaXRlbS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbT3JkZXJDb21wb25lbnQsIExpc3RDb21wb25lbnQsIFN0YXR1c0xpc3RDb21wb25lbnQsIERldGFpbENvbXBvbmVudCwgRGV0YWlsSXRlbUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPcmRlckNvbXBvbmVudCwgTGlzdENvbXBvbmVudCwgU3RhdHVzTGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJNb2R1bGUgeyB9XG4iXX0=