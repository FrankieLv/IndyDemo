import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoldingDetailPageRoutingModule } from './holding-detail-routing.module';

import { HoldingDetailPage } from './holding-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoldingDetailPageRoutingModule
  ],
  declarations: [HoldingDetailPage]
})
export class HoldingDetailPageModule {}
