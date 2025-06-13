import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalUserPageRoutingModule } from './personal-user-routing.module';

import { PersonalUserPage } from './personal-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalUserPageRoutingModule
  ],
  declarations: [PersonalUserPage]
})
export class PersonalUserPageModule {}
