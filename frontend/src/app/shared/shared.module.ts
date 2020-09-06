import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module';
import { CutTextPipe } from './pipes/cut-text.pipe';

@NgModule({
  declarations: [CutTextPipe],
  imports: [CommonModule, ComponentsModule],
  exports: [ComponentsModule, CutTextPipe],
})
export class SharedModule {}
