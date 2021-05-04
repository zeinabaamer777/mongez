import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddressManager } from '../../../@core/managers/address.manager';
import { AddressModel } from '../../../@core/models/address.model';
import { AddressService } from '../../../@core/services/address-service/address.service';

@Component({
  selector: 'ngx-add-your-address',
  templateUrl: './add-your-address.component.html',
  styleUrls: ['./add-your-address.component.scss']
})
export class AddYourAddressComponent implements OnInit {
  public loadForm: boolean = false;
  public address: AddressModel;
  public addressForm: FormGroup;
  public hasFormError: boolean;
  currentAddress;
  @Output() stepValiditiyChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private route: ActivatedRoute,
    private addressManager: AddressManager
  ) { }

  ngOnInit(): void {
    this.address = new AddressModel(null);
    this.initAddressForm();
    // const addressId = parseInt(this.route.snapshot.paramMap.get('id'));
    // if (addressId) {
    //   // edit mode
    //   this.addressService.getAddressById(addressId).subscribe((data) => {
    //     this.address = data;
    //     this.initAddressForm();
    //   });
    // } else {
    //   // add mode
    //   this.address = new AddressModel(null);
    //   this.initAddressForm();
    // }
  }

  initAddressForm() {
    this.addressForm = this.formBuilder.group({
      address: ['', [Validators.required]],
      building: ['', [Validators.required]],
      floor: ['', [Validators.required]],
      door: ['', [Validators.required]],
    });
    this.loadForm = true;
  }

  public submit(): void {
    if (this.addressForm.invalid) {
      this.hasFormError = true;
      return;
    }
    const payload = { ...this.addressForm.value };
    this.addressManager.addAddress(payload)
  }


  stepValid() {
    let valid;
    valid = this.addressForm?.value
    this.stepValiditiyChanged.emit({
      valid,
      // currentAddress: this.currentAddress,
      addressForm: this.addressForm?.value
    });
    return valid;
  }
}
