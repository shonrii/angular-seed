import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import * as fromRoot from '../../store';
import * as userAdminActions from '../../store/actions/user-admin.actions';

import { AddUserDialogComponent } from '../dialog/add-user-dialog.component';
import { ConfirmDialogComponent } from '../../shared/dialog/confirm-dialog.component';
import { User } from '../../app-core/models';
import { AppUtils } from '../../utils/app.utils';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home-dashboard',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})

export class DashboardHomeComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    private dialog: MdDialog,
    private store: Store<fromRoot.State>
  ) {
    this.users$ = this.store.select(fromRoot.getUserList);
  }

  ngOnInit() {
    this.store.dispatch(new userAdminActions.LoadUsersAction);
  }

  openAddDialog() {
    this.dialog.open(AddUserDialogComponent, { width: '500px' })
      .afterClosed()
      .filter(result => !!result)
      .subscribe(form => {
        AppUtils.trimFields(form);
        const user: User = new User(form);
        const payload = { user: user };
        this.store.dispatch(new userAdminActions.CreateUserAction(payload));

        setTimeout(() => {
          this.store.dispatch(new userAdminActions.LoadUsersAction);
        }, 500);
      });
  }

  openDeleteDialog(user: User) {
    this.dialog.open(
      ConfirmDialogComponent,
      {
        data: {
          title: 'Delete User',
          message: 'Delete user, ' + user.firstName + ' ' + user.lastName + '?'
        }
      })
      .afterClosed()
      .filter(result => !!result)
      .subscribe(success => {
        const payload = { id: user.id };
        this.store.dispatch(new userAdminActions.DeleteUserAction(payload));

        setTimeout(() => {
          this.selectUser(null);
          this.store.dispatch(new userAdminActions.LoadUsersAction);
        }, 500);
      },
      error => console.log('error', error));
  }

  selectUser(user: User) {
    if (!!user) {
      this.store.dispatch(new userAdminActions.LoadUserAction({ id: user.id }));
      this.store.dispatch(go(['/home', user.id]));
    } else {
      this.store.dispatch(go(['/home']));
    }
  }

}
