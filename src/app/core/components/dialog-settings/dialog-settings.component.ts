import { CommonModule } from '@angular/common';
import { ChooseTypeDialogData, SelecetedFieldSize } from '@/app/shared/types';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { getFieldSize } from '@/app/shared/utils';
import { StateService } from '@/app/core/state.service';

@Component({
  selector: 'app-dialog-settings',
  standalone: true,
  imports: [
    MatSelectModule,
    MatDialogActions,
    CommonModule,
    MatDialogContent,
    MatSelect,
    FormsModule,
    MatDialogTitle,
  ],
  templateUrl: './dialog-settings.component.html',
  styleUrl: './dialog-settings.component.scss',
})
export class DialogSettingsComponent {
  selectedType: SelecetedFieldSize = SelecetedFieldSize.FourXFour;

  constructor(
    public dialogRef: MatDialogRef<DialogSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChooseTypeDialogData
  ) {}

  onConfirm() {
    this.dialogRef.close(this.selectedType);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
