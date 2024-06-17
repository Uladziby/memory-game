import { CommonModule } from '@angular/common';
import { WinnerType } from '@/app/shared/types';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-dialog-winner',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './dialog-winner.component.html',
  styleUrl: './dialog-winner.component.scss',
})
export class DialogWinnerComponent {
  public winner: WinnerType = this.data.winner;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { winner: WinnerType }) {
    console.log(this.winner);
  }
}
