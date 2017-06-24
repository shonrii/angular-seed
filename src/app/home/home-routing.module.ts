import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from '../auth-core/services/auth-guard.service';
import { UserAdminGuard } from './guards/user-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardHomeComponent,
        children: [
          {
            path: ':id',
            component: UserDetailsComponent,
            // resolve: {
            //   user: UserResolverService
            // }
            canActivateChild: [UserAdminGuard]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserAdminGuard]
})
export class HomeRoutingModule { }

export const routedComponents = [HomeComponent];
