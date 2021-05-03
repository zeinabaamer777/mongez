import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersListRoutingModule } from './orders-list-routing.module';
import { OrdersListComponent } from './orders-list.component';
import { SharedModule } from '../../shared/shared.module';
import { BreadcrumbsModule } from '../../shared/components/breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [OrdersListComponent],
  imports: [
    CommonModule,
    OrdersListRoutingModule,
    SharedModule,
    BreadcrumbsModule
  ]
})
export class OrdersListModule { }
