import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminHeaderComponent } from './admin-header.component';

import { NzSwitchModule } from 'ng-zorro-antd/switch';



@NgModule({
  declarations: [AdminHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzSwitchModule
  ],
  exports: [AdminHeaderComponent],
})
export class AdminHeaderModule { }
