import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardType, StateCardEnum } from '../../../shared/types';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [
    trigger('wobble', [
      transition(
        'false => true',
        animate(
          '0.75s',
          keyframes([
            style({ transform: 'translate(-5%)', offset: 0.1 }),
            style({ transform: 'translate(5%)', offset: 0.3 }),
            style({ transform: 'translate(-5%)', offset: 0.5 }),
            style({ transform: 'translate(5%)', offset: 0.7 }),
            style({ transform: 'translate(0)', offset: 0.9 }),
          ])
        )
      ),
    ]),
  ],
})
export class CardComponent {
  stateCard: StateCardEnum = StateCardEnum.Unflipped;

  @Input() card!: CardType;

  @Output() cardId: EventEmitter<any> = new EventEmitter<any>();

  cardStyles = {};

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
    this.stateCard = StateCardEnum.Flipped;
  }
}
