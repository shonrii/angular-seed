import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../http-core/services/user.service';
import { User } from '../../app-core/models';
import { AppUtils } from '../../utils/app.utils';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  avatars = new Array(16).fill(0).map((_, i) => `svg-${i + 1}`);
  userSub: any;
  user: User;

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userSub = this.route.data
      .subscribe((data: { user: User }) => {
        this.user = data.user;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  submit(form: any) {
    AppUtils.trimFields(form);
    const user: User = new User(form);
    user.id = this.user.id;
    this.userService.update(user)
      .subscribe(updatedUser => console.log('updated user', updatedUser),
        error => console.log(error));
  }

}
