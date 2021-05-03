import { Component, OnInit } from '@angular/core';
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
      title: ['', [Validators.required]],
      building_no: ['', [Validators.required]],
      floor_no: ['', [Validators.required]],
      door_no: ['', [Validators.required]],
    });
    this.loadForm = true;
  }

  public submit(): void {
    if (this.addressForm.invalid) {
      this.hasFormError = true;
      return;
    }
    const payload = { ...this.addressForm.value };
    // this.addressManager.addAddress(payload)
  }

}
