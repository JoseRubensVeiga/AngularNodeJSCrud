import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { ToolbarComponent } from './toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InputFieldComponent } from './input-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TextAreaFieldComponent } from './text-area-field/text-area-field.component';
import { InputDateComponent } from './input-date/input-date.component';

import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    InputFieldComponent,
    TextAreaFieldComponent,
    InputDateComponent,
  ],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,

    ReactiveFormsModule,

    RouterModule,
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent,
    InputFieldComponent,
    TextAreaFieldComponent,
    InputDateComponent,
  ],
})
export class ComponentsModule {}
