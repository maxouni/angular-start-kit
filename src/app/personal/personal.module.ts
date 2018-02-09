import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';

import { PersonalRoutingModule } from './personal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PersonalRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class PersonalModule { }
