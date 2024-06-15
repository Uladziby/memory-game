import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../core/components/card/card.component';
import { CardEmitType, CardType } from '../../../shared/types';
import { CatsCards } from '@/app/shared/constants';
import { delay } from '@/app/shared/utils';
import { LucideAngularModule } from 'lucide-angular';
import { TimerComponent } from '@/app/core/components/timer/timer.component';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    NgFor,
    LucideAngularModule,
    TimerComponent,
  ],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss',
})
export class GamePageComponent {
  cards: CardType[] = [];

  private isAnimation = false;

  private FLIP_DELAY = 2000;

  public isStartGame = false;

  isStopGame: boolean = false;

  private selectedCard: CardEmitType | null = null;

  constructor() {
    this.shuffleCards();
  }

  shuffleCards() {
    this.cards = CatsCards.concat(CatsCards);
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
    console.log('marked cards');
    this.cards = this.cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
        };
      }
      return card;
    });
  }

  onStartGame() {
    this.isStartGame = true;
    this.isStopGame = false;
  }

  onStopGame() {
    this.isStopGame = true;

    setTimeout(() => {
      this.isStartGame = false;

      this.shuffleCards();
    }, 0);
  }
}
