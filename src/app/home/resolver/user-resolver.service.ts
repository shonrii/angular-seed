import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../../http-core/services/user.service';
import { User } from '../../app-core/models';

@Injectable()
export class UserResolverService implements Resolve<User> {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const id = route.params['id'];
    return this.userService.findUser(id);
  }

}
