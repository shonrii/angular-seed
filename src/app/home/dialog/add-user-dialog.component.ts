import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent {
  avatars = new Array(16).fill(0).map((_, i) => `svg-${i + 1}`);
  selectedAvatar = this.avatars[0];

  constructor(public dialogRef: MdDialogRef<AddUserDialogComponent>) { }

}
