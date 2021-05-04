import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MainResponse } from '../models/mainResponse.model';
import { OrderHistoryModel } from '../models/order-history.model';
import { OrderHistoryService } from '../services/order-history/order-history.service';
import { CartService } from '../services/cart/cart.service';
import { CheckoutService } from '../services/checkout/checkout.service';


@Injectable({
  providedIn: 'root',
})

export class CheckoutManager {
  public cartItems: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) { }

  checkout(model) {
    this.checkoutService.checkout(model).subscribe(data => {
      if (data.status == 'success') {
        this.cartItems.next(data.data);
        this.toastr.success("Order Placed successfully");
      }
    })
  }

}
