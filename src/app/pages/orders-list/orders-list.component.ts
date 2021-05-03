import { Component, OnInit } from '@angular/core';
import { OrderHistoryModel } from '../../@core/models/order-history.model';
import { OrdersHistoryManager } from '../../@core/managers/orders-history.manager';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  orders: OrderHistoryModel[];
  currency: string = 'LE';

  constructor(private ordersHistoryManager: OrdersHistoryManager) { }

  ngOnInit(): void {
    this.ordersHistoryManager.ordersHistory$.subscribe(res => {
      this.orders = res;
      // console.log("Orders ", this.orders)
    });

    this.ordersHistoryManager.getOrders();
  }

}
