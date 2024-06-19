import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { MatDialog } from '@angular/material/dialog';
import { DialogAboutmeComponent } from '../dialog-aboutme/dialog-aboutme.component';
import { DialogSettingsComponent } from '@/app/core/components/dialog-settings/dialog-settings.component';
import { StateService } from '@/app/core/state.service';
import { getFieldSize } from '@/app/shared/utils';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LucideAngularModule,
    DialogAboutmeComponent,
    DialogSettingsComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public dialog: MatDialog, public stateService: StateService) {}

  openDialogAboutMe() {
    this.dialog.open(DialogAboutmeComponent);
  }

  openDialogSettings() {
    const dialogRef = this.dialog.open(DialogSettingsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.stateService.selectedFieldSize.next(getFieldSize(result));
    });
  }
}
