import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenceledPage } from './cenceled.page';

const routes: Routes = [
  {
    path: '',
    component: CenceledPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenceledPageRoutingModule {}
