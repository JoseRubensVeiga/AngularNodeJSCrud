import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { ToolbarComponent } from './toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [ToolbarComponent, SidenavComponent],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
  ],
  exports: [ToolbarComponent, SidenavComponent],
})
export class ComponentsModule {}
