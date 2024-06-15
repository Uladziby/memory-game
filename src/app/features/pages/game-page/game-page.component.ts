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

  public numberOfMoves: number = 0;
  public fieldSize: number;

  isStopGame: boolean = false;

  private selectedCard: CardEmitType | null = null;

  constructor() {
    this.fieldSize = Number(localStorage.getItem('selectedType'));
    this.shuffleCards(this.fieldSize);
  }

  shuffleCards(size: number) {
    const transformedArray = CatsCards.sort(() => Math.random() - 0.5).slice(
      0,
      size
    );

    this.cards = transformedArray.concat(transformedArray);
    console.log('this.cards', transformedArray);
    this.cards = this.cards.sort(() => Math.random() - 0.5);
  }

  async onCheckCardId(activeCard: CardEmitType) {
    if (this.isAnimation) return;

    this.isAnimation = true;

    activeCard.flipToFront();

    if (!this.selectedCard) {
      this.selectedCard = activeCard;

      this.isAnimation = false;
      return;
    }

    if (this.selectedCard.id !== activeCard.id) {
      await delay(this.FLIP_DELAY);

      await Promise.all([
        this.selectedCard.flipToBack(),
        activeCard.flipToBack(),
      ]);
    } else {
      this.onMarkedCards(activeCard.id);
    }

    this.numberOfMoves++;
    this.isAnimation = false;
    this.selectedCard = null;
  }

  onMarkedCards(id: number) {
    console.log('marked cards');
    this.cards = this.cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          isMatched: true,
        };
      }
      return card;
    });
  }

  onStartGame() {
    this.isStartGame = true;
    this.isStopGame = false;
    this.numberOfMoves = 0;
  }

  onStopGame() {
    this.isStopGame = true;

    setTimeout(() => {
      this.isStartGame = false;

      this.shuffleCards(this.fieldSize);
    }, 0);
  }

  trackByFn(index: number, hero: { id: number }) {
    return hero ? hero.id : undefined;
  }
}
