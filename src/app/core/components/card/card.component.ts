import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CardType, StateCardEnum } from '../../../shared/types';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  stateCard: StateCardEnum = StateCardEnum.Unflipped;
  @Input() card!: CardType;
  @Output() cardId: EventEmitter<any> = new EventEmitter<any>();
  cardStyles = {};

  ngOnInit() {
    this.cardStyles = {
      'background-image': `url(${this.card.url})`,
    };
    /*  this.stateCard = this.card.isFlipped
      ? StateCardEnum.Flipped
      : StateCardEnum.Unflipped; */
  }

  flipCard() {
    this.cardId.emit({
      id: this.card.id,
      flipToFront: this.flipToFront.bind(this),
      flipToBack: this.flipToBack.bind(this),
    });
  }

  flipToBack() {
    this.stateCard = StateCardEnum.Unflipped;
  }

  flipToFront() {
    this.stateCard = StateCardEnum.Flipped;
  }
}
