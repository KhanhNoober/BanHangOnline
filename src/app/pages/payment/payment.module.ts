import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';

import { SharedModuleModule } from 'src/app/modules/shared-module/shared-module.module';

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,

    SharedModuleModule
  ]
})
export class PaymentModule { }
