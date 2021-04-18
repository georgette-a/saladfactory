import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupMethodPageRoutingModule } from './signup-method-routing.module';

import { SignupMethodPage } from './signup-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupMethodPageRoutingModule
  ],
  declarations: [SignupMethodPage]
})
export class SignupMethodPageModule {}
