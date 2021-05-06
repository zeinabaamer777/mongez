/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
 import { BrowserModule } from '@angular/platform-browser';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { NgModule } from '@angular/core';
 import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { CoreModule } from './@core/core.module';
 import { ThemeModule } from './@theme/theme.module';
 import { AppComponent } from './app.component';
 import { AppRoutingModule } from './app-routing.module';
 import { ToastrModule } from 'ngx-toastr';
 import { AgmCoreModule } from '@agm/core';

 import {
   NbChatModule,
   NbDatepickerModule,
   NbDialogModule,
   NbMenuModule,
   NbSidebarModule,
   NbToastrModule,
   NbWindowModule,
 } from '@nebular/theme';
 import { JwtInterceptor } from './@core/interceptor/jwt.interceptor';
 import { CommonModule } from '@angular/common';

 @NgModule({
  //  declarations: [AppComponent],
   exports: [
     AgmCoreModule
   ],
   imports: [
    AgmCoreModule
   ]
 })
 export class SharedModule {
 }
