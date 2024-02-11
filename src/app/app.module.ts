import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { ResultAlertComponent } from './result-alert/result-alert.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
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
