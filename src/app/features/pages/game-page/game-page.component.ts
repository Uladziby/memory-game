import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../core/components/card/card.component';
import {
  CardEmitType,
  CardType,
  SelecetedFieldSize,
} from '../../../shared/types';
import { CatsCards } from '@/app/shared/constants';
import { delay, shuffleArray } from '@/app/shared/utils';
import { LucideAngularModule } from 'lucide-angular';
import { TimerComponent } from '@/app/core/components/timer/timer.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogWinnerComponent } from '@/app/core/components/dialog-winner/dialog-winner.component';
import { StateService } from '@/app/core/state.service';
import { Observable, map } from 'rxjs';

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
export class GamePageComponent implements OnInit {
  public cards: CardType[] = [];

  private isAnimation = false;

  private FLIP_DELAY = 2000;

  public isStartGame = false;

  public numberOfMoves: number = 0;

  public isStopGame: boolean = false;

  public time: string = '00:00';

  selectedType: Observable<SelecetedFieldSize> =
    this.stateService.selectedFieldSize$;

  private selectedCard: CardEmitType | null = null;

  constructor(private dialog: MatDialog, public stateService: StateService) {}

  ngOnInit() {
    this.shuffleCards();
  }

  shuffleCards() {
    this.selectedType
      .pipe(
        map((size) => {
          const shuffledArray = shuffleArray(CatsCards).slice(0, size);
          const transformedArray = shuffledArray.concat(shuffledArray);
          return shuffleArray(transformedArray);
        })
      )
      .subscribe({
        next: (cards) => {
          this.cards = cards;

          if (this.isStartGame) {
            this.isStopGame = true;
            this.isStartGame = false;
          }
        },
      });
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
    this.cards = this.cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          isMatched: true,
        };
      }
      return card;
    });

    this.onCheckCardMatched();
  }

  onCheckCardMatched() {
    if (this.cards.every((card) => card.isMatched)) {
      this.dialog.open(DialogWinnerComponent, {
        data: { winner: { time: this.time, score: this.numberOfMoves + 1 } },
      });

      setTimeout(() => {
        this.onStopGame();
      }, 2000);
    }
  }

  onStartGame() {
    this.isStartGame = true;
    this.isStopGame = false;
    this.numberOfMoves = 0;

    this.cards = this.cards.map((card) => {
      return {
        ...card,
        isMatched: false,
        isFlipped: false,
      };
    });
  }

  onStopGame() {
    this.isStopGame = true;

    setTimeout(() => {
      this.isStartGame = false;

      this.shuffleCards();
    }, 0);
  }

  trackByFn(index: number, hero: { id: number }) {
    return hero ? hero.id : undefined;
  }

  setFinalTime(time: string) {
    this.time = time;
  }
}
