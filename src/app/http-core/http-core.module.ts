/* tslint:disable:member-ordering no-unused-variable */
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { HttpModule } from '@angular/http';

import { UserService } from './services/user.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl : true })
  ],
  declarations: [],
  exports: [HttpModule],
  providers: [UserService]
})
export class HttpCoreModule {
  constructor( @Optional() @SkipSelf() parentModule: HttpCoreModule) {
    if (parentModule) {
      throw new Error(
        'HttpCoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
