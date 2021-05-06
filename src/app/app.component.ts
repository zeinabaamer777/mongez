/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private analytics: AnalyticsService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
