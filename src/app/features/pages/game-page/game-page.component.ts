import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../core/components/card/card.component';
import { CardType } from '../../../shared/types';
import { CatsCards } from '@/app/shared/constants';
import cat from '../../../../assets/cats-cards/cat2.png';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CardComponent, CommonModule, NgFor],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss',
})
export class GamePageComponent {
  cards: CardType[] = [];

  constructor() {
    this.cards = CatsCards.concat(CatsCards);
  }
}
