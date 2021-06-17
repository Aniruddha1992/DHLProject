import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
// { ShowDashboardModule } from './show-dashboard/show-dashboard.module';
import { ShowDashboardsComponent } from './show-dashboards/show-dashboards.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDashboardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
   // ShowDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
