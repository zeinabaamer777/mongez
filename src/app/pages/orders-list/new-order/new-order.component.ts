import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartManager } from '../../../@core/managers/cart.manager';

@Component({
  selector: 'ngx-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {
  public orderForm: FormGroup;
  public customerForm: FormGroup
  hasFormError: boolean;
  cartItems: any[];
  shippingInfo;
  constructor(private formBuilder: FormBuilder,
    private cartManager: CartManager) {

  }

  ngOnInit(): void {
    this.initOrderForm();
    this.initCustomerForm();

    this.cartManager.getCartItems();
    this.cartManager.cartItems.subscribe(data => {
      this.cartItems = data;
    })
  }

  initOrderForm() {
    this.orderForm = this.formBuilder.group({
      notes_text: ['', [Validators.required]],
      // customer_name: ['', [Validators.required]],
      // phone: ['', [Validators.required]]
    });
  }

  initCustomerForm() {
    this.customerForm = this.formBuilder.group({
      customer_name: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    })
  }
  submit() {
    if (this.orderForm.invalid) {
      this.hasFormError = true;
      return;
    }
    const payload = this.orderForm.value;
    this.cartManager.addToCart(payload);
    this.orderForm.reset();
  }

  checkout() {
    if (this.customerForm.invalid) {
      this.hasFormError = true;
      return;
    }
    const payload = this.customerForm.value;
    console.log(payload)
    this.customerForm.reset();
  }

  getShippingInfo(evt) {
    this.shippingInfo = evt;
    console.log("evt= ", evt)
  }
}

