import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeopoldGearsRoutingModule } from './leopold-gears-routing.module';
import { LeopoldGearsComponent } from './leopold-gears.component';

import { SharedModuleModule } from 'src/app/modules/shared-module/shared-module.module';


@NgModule({
  declarations: [
    LeopoldGearsComponent
  ],
  imports: [
    CommonModule,
    LeopoldGearsRoutingModule,

    SharedModuleModule
  ]
})
export class LeopoldGearsModule { }
