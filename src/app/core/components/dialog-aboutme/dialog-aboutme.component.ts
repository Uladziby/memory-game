import { Component } from '@angular/core';
import { aboutMe } from '../../../shared/constants';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-dialog-aboutme',
  standalone: true,
  imports: [MatCardModule, CommonModule, LucideAngularModule],
  templateUrl: './dialog-aboutme.component.html',
  styleUrl: './dialog-aboutme.component.scss',
})
export class DialogAboutmeComponent {
  public infoAboutme = aboutMe;

  onClose() {}
}
