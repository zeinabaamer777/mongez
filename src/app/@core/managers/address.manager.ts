import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddressModel } from '../models/address.model';
import { AddressService } from '../services/address-service/address.service';

@Injectable({
  providedIn: 'root',
})

export class AddressManager {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private addressService: AddressService
  ) { }

  addAddress(data: AddressModel) {
    console.log(data)
    return this.addressService.addAddress(data).subscribe(
      (res) => {
        this.toastr.success('successfully added');
        // this.router.navigateByUrl('pages/user-addresses');
      },
      (error) => {
        this.toastr.error('something wrong');
      }
    );
  }
}
