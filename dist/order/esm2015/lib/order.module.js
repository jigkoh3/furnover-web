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
export class OrderModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmc2LW1hdC1vcmRlci8iLCJzb3VyY2VzIjpbImxpYi9vcmRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFZMUUsTUFBTTs7O1lBVkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDO2dCQUN4RyxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixDQUFDO2FBQzlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9yZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGF0dXNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zdGF0dXMtbGlzdC9zdGF0dXMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IERldGFpbENvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlsL2RldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGV0YWlsSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlsLWl0ZW0vZGV0YWlsLWl0ZW0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW09yZGVyQ29tcG9uZW50LCBMaXN0Q29tcG9uZW50LCBTdGF0dXNMaXN0Q29tcG9uZW50LCBEZXRhaWxDb21wb25lbnQsIERldGFpbEl0ZW1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbT3JkZXJDb21wb25lbnQsIExpc3RDb21wb25lbnQsIFN0YXR1c0xpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyTW9kdWxlIHsgfVxuIl19