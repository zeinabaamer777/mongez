import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BreadcrumbsModule
  ],
  exports: [
    BreadcrumbsModule
  ]
})
export class SharedModule { }
