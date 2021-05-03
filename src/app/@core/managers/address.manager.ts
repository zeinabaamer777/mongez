import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
}
