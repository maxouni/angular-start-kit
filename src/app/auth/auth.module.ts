import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '@shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  declarations: [AuthComponent],
  exports: [AuthComponent]
})
export class AuthModule { }
