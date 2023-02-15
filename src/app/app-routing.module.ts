import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'akko_gears', loadChildren: () => import('./pages/akko-gears/akko-gears.module').then(m => m.AkkoGearsModule) },
  { path: 'leopold-gears', loadChildren: () => import('./pages/leopold-gears/leopold-gears.module').then(m => m.LeopoldGearsModule) },
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
  { path: 'payment', loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentModule) },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
