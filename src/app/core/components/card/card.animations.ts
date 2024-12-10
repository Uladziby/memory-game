import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const cardAnimations = [
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
];
