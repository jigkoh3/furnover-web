import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { ListComponent } from './list/list.component';
import { StatusListComponent } from './status-list/status-list.component';
import { MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { DetailComponent } from './detail/detail.component';
import { DetailItemComponent } from './detail-item/detail-item.component';

@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [OrderComponent, ListComponent, StatusListComponent, DetailComponent, DetailItemComponent],
  exports: [OrderComponent, ListComponent, StatusListComponent]
})
export class OrderModule { }
