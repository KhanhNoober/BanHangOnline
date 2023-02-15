import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AkkoGearsRoutingModule } from './akko-gears-routing.module';
import { AkkoGearsComponent } from './akko-gears.component';

import { SharedModuleModule } from 'src/app/modules/shared-module/shared-module.module';

@NgModule({
  declarations: [
    AkkoGearsComponent
  ],
  imports: [
    CommonModule,
    AkkoGearsRoutingModule,
    SharedModuleModule
  ]
})
export class AkkoGearsModule { }
