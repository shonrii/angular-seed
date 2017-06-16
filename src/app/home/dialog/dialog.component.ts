import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { MdDialogRef } from '@angular/material';

// temp
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  avatars = new Array(16).fill(0).map((_, i) => `svg-${i + 1}`);
  selectedAvatar = this.avatars[0];

  constructor(public dialogRef: MdDialogRef<DialogComponent>) { }

}
