import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupMethodPage } from './signup-method.page';

const routes: Routes = [
  {
    path: '',
    component: SignupMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupMethodPageRoutingModule {}
