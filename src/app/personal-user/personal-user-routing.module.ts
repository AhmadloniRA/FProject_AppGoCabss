import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalUserPage } from './personal-user.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalUserPageRoutingModule {}
