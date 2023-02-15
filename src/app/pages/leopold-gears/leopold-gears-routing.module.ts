import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeopoldGearsComponent } from './leopold-gears.component';

const routes: Routes = [{ path: '', component: LeopoldGearsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeopoldGearsRoutingModule { }
