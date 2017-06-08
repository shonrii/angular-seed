import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../core/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home-dashboard',
  template: `
  <div class="dashboard-container">
    <p>home dashboard</p>
  </div>
  `,
  styleUrls: ['./dashboard-home.component.scss']
})

export class DashboardHomeComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => console.log('users', users));
  }
}
