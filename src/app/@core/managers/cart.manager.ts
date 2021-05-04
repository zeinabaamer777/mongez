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


@Injectable({
  providedIn: 'root',
})

export class CartManager {
  public cartItems: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private cartService: CartService
  ) { }

  addToCart(model) {
    this.cartService.addToCart(model).subscribe(data => {
      if (data.status == 'success') {
        this.toastr.success("order added successfully");
      }
    })
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe(res => {
      this.cartItems.next(res.data);
    })
  }

}
