import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardEmitType, CardType, StateCardEnum } from '../../../shared/types';
import { LucideAngularModule } from 'lucide-angular';
import { cardAnimations } from '@/app/core/components/card/card.animations';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: cardAnimations,
})
export class CardComponent {
  @Input() isStopGame: boolean = false;

  @Input() card!: CardType;

  @Output() cardId: EventEmitter<CardEmitType> =
    new EventEmitter<CardEmitType>();

  public cardStyles = {};

  public stateCard: StateCardEnum = StateCardEnum.Unflipped;

  protected woobleField = false;

  ngOnInit() {
    this.cardStyles = {
      'background-image': `url(${this.card.url})`,
    };
  }

  flipCard() {
    this.cardId.emit({
      id: this.card.id,
      flipToFront: this.flipToFront.bind(this),
      flipToBack: this.flipToBack.bind(this),
    });
  }

  flipToBack() {
    this.woobleField = true;
    setTimeout(() => {
      this.stateCard = StateCardEnum.Unflipped;
      this.woobleField = false;
    }, 500);
  }

  flipToFront() {
    this.card = { ...this.card, isFlipped: true };
    this.stateCard = StateCardEnum.Flipped;
  }

  ngOnChanges() {
    if (this.isStopGame) {
      this.flipToBack();
    }
  }
}
