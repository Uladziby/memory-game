import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StateCardEnum } from '../../../shared/constants';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  stateCard: StateCardEnum = StateCardEnum.Unflipped;
  @Input() cardImage!: string;
  cardStyles = {};

  ngOnInit() {
    this.cardStyles = {
      'background-image': `url(${this.cardImage})`,
    };
  }

  flipCard() {
    this.stateCard =
      this.stateCard === StateCardEnum.Unflipped
        ? StateCardEnum.Flipped
        : StateCardEnum.Unflipped;
  }
}
