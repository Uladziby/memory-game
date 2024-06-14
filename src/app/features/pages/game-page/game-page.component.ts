import { Component } from '@angular/core';
import { CardComponent } from '../../../core/components/card/card.component';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss',
})
export class GamePageComponent {}
