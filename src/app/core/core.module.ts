import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogService } from '@services/log/log.service';
import {AuthService} from "@services/auth/auth.service";
import {AuthGuardService} from "@services/auth/auth-guard.service";
import {AlertService} from "@services/alert/alert.service";
import {UserService} from "@services/user/user.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LogService,
    AuthGuardService,
    AuthService,
    AlertService,
    UserService
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
