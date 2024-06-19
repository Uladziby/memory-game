export type CardType = {
  url: string;
  id: number;
  isMatched: boolean;
  isFlipped: boolean;
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

export interface ChooseTypeDialogData {
  selectedType?: '4x4' | '5x5';
}

export type WinnerType = {
  time: string;
  score: number;
};

export enum SelecetedFieldSize {
  FourXFour = 8,
  FourXFive = 10,
}
