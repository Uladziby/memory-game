import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../core/components/card/card.component';
import { CardEmitType, CardType } from '../../../shared/types';
import { CatsCards } from '@/app/shared/constants';
import { delay } from '@/app/shared/utils';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CardComponent, CommonModule, NgFor],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss',
})
export class GamePageComponent {
  cards: CardType[] = [];
  private isAnimation = false;
  private FLIP_DELAY = 2000;

  private selectedCard: {
    id: number;
    flipToBack: () => void;
    flipToFront: () => void;
  } | null = null;

  constructor() {
    this.cards = CatsCards.concat(CatsCards);

    this.shuffleCards();
  }

  shuffleCards() {
    this.cards = this.cards.sort(() => Math.random() - 0.5);
  }

  async onCheckCardId(card: CardEmitType) {
    const { id, flipToBack, flipToFront } = card;

    if (this.isAnimation) {
      return;
    }

    this.isAnimation = true;

    flipToFront();

    if (!this.selectedCard) {
      this.selectedCard = card;

      this.isAnimation = false;
      return;
    }

    if (this.selectedCard.id !== id) {
      await delay(this.FLIP_DELAY);

      await Promise.all([this.selectedCard.flipToBack(), flipToBack()]);
    } else {
      this.onMarkedCards(id);
    }
    this.isAnimation = false;
    this.selectedCard = null;
  }
  onMarkedCards(id: number) {
    console.log('marked cards', this.selectedCard, id);
    //this.cards = this.cards.map((card) => {});
  }
}
