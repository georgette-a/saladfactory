import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalScreenPageRoutingModule } from './final-screen-routing.module';

import { FinalScreenPage } from './final-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalScreenPageRoutingModule
  ],
  declarations: [FinalScreenPage]
})
export class FinalScreenPageModule {}
