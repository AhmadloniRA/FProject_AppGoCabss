import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackingDriverPageRoutingModule } from './tracking-driver-routing.module';

import { TrackingDriverPage } from './tracking-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackingDriverPageRoutingModule
  ],
  declarations: [TrackingDriverPage]
})
export class TrackingDriverPageModule {}
