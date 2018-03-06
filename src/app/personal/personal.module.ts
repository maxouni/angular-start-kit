import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';

@NgModule({
  imports: [
    CommonModule,
    PersonalRoutingModule,
    SharedModule
  ],
  declarations: [PersonalComponent]
})
export class PersonalModule { }
