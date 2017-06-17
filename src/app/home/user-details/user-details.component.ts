import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../http-core/services/user.service';
import { User } from '../../app-core/models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userSub: any;
  user: User;

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userSub = this.route.params
      .switchMap(p => this.userService.findUser(p.id))
      .subscribe(user => {
        this.user = user;
        this.cdr.detectChanges();
      });
  }

}
