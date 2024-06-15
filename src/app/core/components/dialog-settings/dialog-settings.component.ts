import { CommonModule } from '@angular/common';
import { ChooseTypeDialogData } from '@/app/shared/types';
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
  selectedType!: '4x4' | '4x5';

  constructor(
    public dialogRef: MatDialogRef<DialogSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChooseTypeDialogData
  ) {}

  onConfirm() {
    this.dialogRef.close(this.selectedType);
    console.log('selectedType', this.selectedType);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
