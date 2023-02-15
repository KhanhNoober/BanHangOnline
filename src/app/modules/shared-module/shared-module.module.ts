import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CardComponent } from 'src/app/components/card/card.component';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatCommonModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    CardComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatTreeModule,
    MatListModule,
    MatCommonModule,
    MatBadgeModule
  ],
  exports: [
    CardComponent,
    CartItemComponent,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatTreeModule,
    MatListModule,
    MatCommonModule,
    MatBadgeModule
  ]
})
export class SharedModuleModule { }
