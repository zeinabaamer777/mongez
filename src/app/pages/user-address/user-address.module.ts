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
import { SearchMapComponent } from './search-map/search-map.component';
import { AgmCoreModule } from '@agm/core';
import {GMapModule} from 'primeng/gmap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [UserAddressComponent,
    AddYourAddressComponent,
    MapComponent,
    SearchComponent,
    SearchMapComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    GoogleMapsModule,
    CommonModule,
    GMapModule,
    // BrowserModule,
    // AgmCoreModule,
    FormsModule,
    ReactiveFormsModule,
    UserAddressRoutingModule
  ],
  exports: [
    AddYourAddressComponent
  ]
})
export class UserAddressModule { }
