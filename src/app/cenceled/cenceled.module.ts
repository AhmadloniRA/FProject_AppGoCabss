import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CenceledPageRoutingModule } from './cenceled-routing.module';

import { CenceledPage } from './cenceled.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CenceledPageRoutingModule
  ],
  declarations: [CenceledPage]
})
export class CenceledPageModule {}
