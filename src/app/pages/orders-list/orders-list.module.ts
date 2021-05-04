import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersListRoutingModule } from './orders-list-routing.module';
import { OrdersListComponent } from './orders-list.component';
import { SharedModule } from '../../shared/shared.module';
import { BreadcrumbsModule } from '../../shared/components/breadcrumbs/breadcrumbs.module';
import { NewOrderComponent } from './new-order/new-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddYourAddressComponent } from '../user-address/add-your-address/add-your-address.component';
import { UserAddressModule } from '../user-address/user-address.module';

@NgModule({
  declarations: [OrdersListComponent, NewOrderComponent],
  imports: [
    CommonModule,
    OrdersListRoutingModule,
    SharedModule,
    BreadcrumbsModule,
    FormsModule,
    ReactiveFormsModule,
    UserAddressModule
  ]
})
export class OrdersListModule { }
