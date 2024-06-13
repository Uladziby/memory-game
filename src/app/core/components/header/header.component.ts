import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open();
  }
}
