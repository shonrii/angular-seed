import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../store';
import * as userAdminActions from '../../store/actions/user-admin.actions';

import { UserService } from '../../http-core/services/user.service';
import { User } from '../../app-core/models';
import { AppUtils } from '../../utils/app.utils';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  avatars = new Array(16).fill(0).map((_, i) => `svg-${i + 1}`);
  user$: Observable<User>

  constructor(
    // private route: ActivatedRoute,
    private store: Store<fromRoot.State>,
    private userService: UserService
  ) { }

  ngOnInit() {
    // this.user$ = this.route.data
    //   .map((data: { user: User }) => data.user);
    this.user$ = this.store.select(fromRoot.getSelectedUser);
  }

  submit() {
    // alternatively could dispatch action to update user
    this.user$
      .do(user => {
        AppUtils.trimFields(user);
        this.userService.update(user);
      })
      .subscribe(updatedUser => {
        console.log('updated user', updatedUser);
        setTimeout(() => {
          this.store.dispatch(new userAdminActions.LoadUsersAction);
        }, 500);
      },
      error => console.log(error));
  }

}
