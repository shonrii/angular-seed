import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { UserService } from '../../http-core/services/user.service';
import { User } from '../../app-core/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home-dashboard',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})

export class DashboardHomeComponent implements OnInit {

  users: User[];
  selectedUser: User;

  constructor(
    private dialog: MdDialog,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => {
        console.log('users', users);
        this.users = users;
        if (users && users.length > 0) {
          this.selectedUser = this.users[0];
        }
      });
  }

  private openAdminDialog() {
    this.dialog.open(DialogComponent).afterClosed()
      .filter(result => !!result)
      .subscribe(user => {
        this.users.push(user);
        this.selectedUser = user;
      });
  }

}
