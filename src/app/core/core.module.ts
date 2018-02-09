import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogService } from '@services/log/log.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LogService,
    // AuthGuard,
    // AuthService,
    // ApiConfigService
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
