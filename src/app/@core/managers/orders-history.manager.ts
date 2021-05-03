import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MainResponse } from '../models/mainResponse.model';
import { OrderHistoryModel } from '../models/order-history.model';
import { OrderHistoryService } from '../services/order-history/order-history.service';


@Injectable({
  providedIn: 'root',
})

export class OrdersHistoryManager {
  public ordersHistory$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private orderHistoryService: OrderHistoryService
  ) { }

  getOrders() {
    this.orderHistoryService.getOrdersHistory().subscribe(result => {
      this.ordersHistory$.next(result);
    })
  }
}
