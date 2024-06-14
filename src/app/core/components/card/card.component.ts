import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  cardStyles = {};

  ngOnInit() {
    this.cardStyles = {
      'background-image': `url(${this.card.url})`,
    };
  }

  flipCard() {
    this.stateCard =
      this.stateCard === StateCardEnum.Unflipped
        ? StateCardEnum.Flipped
        : StateCardEnum.Unflipped;
  }
}
