import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import * as fromRoot from '../../store';
import * as auth from '../../store/actions/auth';

import { AddUserDialogComponent } from '../dialog/add-user-dialog.component';
import { ConfirmDialogComponent } from '../../shared/dialog/confirm-dialog.component';
import { UserService } from '../../http-core/services/user.service';
import { User } from '../../app-core/models';
import { AppUtils } from '../../utils/app.utils';
import { ArrayUtils } from '../../utils/array.utils';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home-dashboard',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})

export class DashboardHomeComponent implements OnInit, OnDestroy {

  users: User[];
  isAlive = true;
  private selectedUser: User;

  constructor(
    private cdr: ChangeDetectorRef,
    private dialog: MdDialog,
    private userService: UserService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  openAddDialog() {
    this.dialog.open(AddUserDialogComponent, { width: '500px' })
      .afterClosed()
      .filter(result => !!result)
      .subscribe(form => {
        AppUtils.trimFields(form);
        const user: User = new User(form);
        const payload = {
          user: user
        };

        this.store.dispatch(new auth.RegisterAction(payload));
        // TODO: better solution for reloading
        setTimeout(() => {
          this.loadUsers();
        }, 500);
      });
  }

  openDeleteDialog(user: User) {
    this.selectedUser = user;
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
      .switchMap(result => this.userService.delete(this.selectedUser.id))
      .subscribe(success => {
        console.log('user ' + this.selectedUser.email + ' deleted');
        this.selectUser(this.users[0]);
        // TODO: better solution for reloading
        setTimeout(() => {
          this.loadUsers();
        }, 500);
      },
      error => console.log('error', error));
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.store.dispatch(go(['/home', this.selectedUser.id]));
  }

  loadUsers() {
    this.userService.getUsers()
      .subscribe(users => {
        console.log('users', users);
        this.users = users;
        if (!ArrayUtils.isEmpty(users) && !this.selectedUser) {
          const user = this.users[0];
          this.selectedUser = user;
          this.store.dispatch(go(['/home', user.id]));
        }
        this.cdr.detectChanges();
      });
  }

}
