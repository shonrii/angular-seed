import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../store';
import * as userAdminActions from '../../store/actions/user-admin.actions';

import { UserService } from '../../http-core/services/user.service';
import { User } from '../../app-core/models';

/**
 * examples of resolve guard and canActivate for data loading
 * using ngrx store, we can use the app state to determine if a component can be activated
 * otherwise the resolve guard can be used to ensure data has loaded before a component is active
 */
@Injectable()
export class UserAdminGuard implements CanActivate, Resolve<User> {

  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<fromRoot.State>
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const id = route.params['id'];
    return this.userService.findUser(id);
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = Number(route.params['id']);
    return this.waitForUserToLoad()
      .switchMap(() => this.hasUserInStore(id))
  }

  waitForUserToLoad(): Observable<boolean> {
    return this.store.select(fromRoot.isUserLoaded)
      .filter(loaded => loaded)
      .take(1);
  }

  hasUserInStore(id: number): Observable<boolean> {
    return this.store.select(fromRoot.getSelectedUser)
      .map(user => user.id === id)
      .take(1)
      .switchMap(inStore => {
        if (inStore) {
          return Observable.of(true);
        }
        return this.hasUserInDb(id);
      })
  }

  hasUserInDb(id: number) {
    console.log('hasUserInDb?');
    return Observable
      .of(new userAdminActions.LoadUserAction({ id: id }))
      .do(action => this.store.dispatch(action))
      .map(user => !!user)
      .catch(() => {
        this.store.dispatch(go(['/home']));
        return Observable.of(false);
      })
  }

}
