import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { MatDialog } from '@angular/material/dialog';
import { DialogAboutmeComponent } from '../dialog-aboutme/dialog-aboutme.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule, DialogAboutmeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openDialogAboutMe() {
    this.dialog.open(DialogAboutmeComponent);
  }
}
