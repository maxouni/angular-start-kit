import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '@shared';
import {RegistrationComponent} from './registration.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationRoutingModule,
  ],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent]
})
export class RegistrationModule { }
