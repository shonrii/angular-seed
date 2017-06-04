import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home-dashboard',
  template: `
  <h3>home dashboard<h3>
  `
})

export class DashboardHomeComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
