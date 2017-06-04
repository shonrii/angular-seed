/* tslint:disable:member-ordering no-unused-variable */
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdIconModule,
  MdMenuModule,
  MdToolbarModule
} from '@angular/material';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AppToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule
  ],
  declarations: [AppToolbarComponent],
  exports: [AppToolbarComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        AuthGuard,
        CanDeactivateGuard
      ]
    };
  }
}
