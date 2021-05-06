import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { OrdersListModule } from './orders-list/orders-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    OrdersListModule,
    FormsModule,
    AgmCoreModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
