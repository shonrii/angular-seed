import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import * as fromRoot from '../../store';

@Injectable()
export class AuthErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector,
    private store: Store<fromRoot.State>
  ) { }

  handleError(error) {
    if (error.rejection.status === 401 || error.rejection.status === 403) {
      this.store.dispatch(go('/login'));
    }

    throw error;
  }
}
