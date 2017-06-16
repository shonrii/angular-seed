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
import * as fromRoot from '../../reducers';
import * as auth from '../../actions/auth';

import { DialogComponent } from '../dialog/dialog.component';
import { UserService } from '../../http-core/services/user.service';
import { User } from '../../app-core/models';
import { AppUtils } from '../../utils/app.utils';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home-dashboard',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})

export class DashboardHomeComponent implements OnInit, OnDestroy {

  users: User[];
  selectedUser: User;
  isAlive = true;

  constructor(
    private cdr: ChangeDetectorRef,
    private dialog: MdDialog,
    private userService: UserService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.loadUsers();

    this.store.select(fromRoot.isAuthenticated)
      .takeWhile(() => this.isAlive)
      .filter(authenticated => authenticated)
      .subscribe(value => {
        this.store.dispatch(go('/home'));
      });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  openAdminDialog() {
    this.dialog.open(DialogComponent).afterClosed()
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

  loadUsers() {
    this.userService.getUsers()
      .subscribe(users => {
        console.log('users', users);
        this.users = users;
        if (users && users.length > 0) {
          this.selectedUser = this.users[0];
        }
        this.cdr.detectChanges();
      });
  }

}
