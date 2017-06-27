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

import { SideMenuOptionsService } from './services/side-menu-options.service';
import { AppToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule
  ],
  declarations: [AppToolbarComponent],
  exports: [AppToolbarComponent],
  providers: [SideMenuOptionsService]
})
export class AppCoreModule {
  constructor( @Optional() @SkipSelf() parentModule: AppCoreModule) {
    if (parentModule) {
      throw new Error(
        'AppCoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
