export type CardType = {
  url: string;
  id: number;
  isMarked: boolean;
};

export enum StateCardEnum {
  Unflipped = 'Unflipped',
  Flipped = 'Flipped',
}

export type CardEmitType = {
  id: number;
  flipToBack: () => void;
  flipToFront: () => void;
};
