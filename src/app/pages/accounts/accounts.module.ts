import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';

import { AdminHeaderModule } from '../../components/admin-header/admin-header.module';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    AdminHeaderModule,
    NzTabsModule,
    NzIconModule
  ]
})
export class AccountsModule { }
