import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';

import { AdminHeaderModule } from '../../components/admin-header/admin-header.module';


@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    CardsRoutingModule,
    AdminHeaderModule
  ]
})
export class CardsModule { }
