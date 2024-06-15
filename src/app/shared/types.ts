export type CardType = {
  url: string;
  id: number;
  isMatched: boolean;
};

export enum StateCardEnum {
  Unflipped = 'Unflipped',
  Flipped = 'Flipped',
}

export enum MatchedCardEnum {
  Matched = 'yes',
  Unmatched = 'no',
}

export type CardEmitType = {
  id: number;
  flipToBack: () => void;
  flipToFront: () => void;
};
