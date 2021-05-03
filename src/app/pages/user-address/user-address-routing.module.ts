import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAddressComponent } from './user-address.component';
import { AddYourAddressComponent } from './add-your-address/add-your-address.component';

const routes: Routes = [
  { path: '', component: UserAddressComponent },
  { path: 'add', component: AddYourAddressComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAddressRoutingModule { }
