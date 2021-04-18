import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalScreenPage } from './final-screen.page';

const routes: Routes = [
  {
    path: '',
    component: FinalScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalScreenPageRoutingModule {}
