import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { ResultAlertComponent } from './result-alert/result-alert.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    NgxGoogleAnalyticsModule.forRoot('G-J2N4T5VWZR'),
    NgxGoogleAnalyticsRouterModule,
  ],
  declarations: [
    AppComponent,
    DialogComponent,
    ResultAlertComponent,
    ScoreComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
