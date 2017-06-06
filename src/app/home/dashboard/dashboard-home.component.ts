import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';

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
  constructor() { }

  ngOnInit() { }
}
