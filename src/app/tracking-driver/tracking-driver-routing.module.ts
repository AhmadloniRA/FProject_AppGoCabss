import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackingDriverPage } from './tracking-driver.page';

const routes: Routes = [
  {
    path: '',
    component: TrackingDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackingDriverPageRoutingModule {}
