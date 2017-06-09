/* tslint:disable:member-ordering no-unused-variable */
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    AuthService,
    AuthGuard,
    CanDeactivateGuard
  ]
})
export class AuthCoreModule {
  constructor( @Optional() @SkipSelf() parentModule: AuthCoreModule) {
    if (parentModule) {
      throw new Error(
        'AuthCoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
