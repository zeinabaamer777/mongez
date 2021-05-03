import { NgModule } from '@angular/core';
import { UserAddressRoutingModule } from './user-address-routing.module';
import { UserAddressComponent } from './user-address.component';
import { AddYourAddressComponent } from './add-your-address/add-your-address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MapComponent } from './search-map/map/map.component';
import { SearchComponent } from './search-map/search/search.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [UserAddressComponent, AddYourAddressComponent, MapComponent, SearchComponent],
  imports: [
    GoogleMapsModule,
    CommonModule,
    // BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserAddressRoutingModule
  ]
})
export class UserAddressModule { }
