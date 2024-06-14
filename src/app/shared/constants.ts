import cat from '../../assets/cats-cards/cat.jpg';
import cat2 from '../../assets/cats-cards/cat_2.jpg';
import cat3 from '../../assets/cats-cards/cat_3.jpg';
import cat4 from '../../assets/cats-cards/cat_4.jpg';
import cat5 from '../../assets/cats-cards/cat_5.jpg';
import cat6 from '../../assets/cats-cards/cat_6.jpg';
import cat7 from '../../assets/cats-cards/cat_7.jpg';
import cat8 from '../../assets/cats-cards/cat_8.jpg';

/* export const CatsCards: CardType[] = [
  { url: cat, id: 1 },
  { url: cat2, id: 2 },
  { url: cat3, id: 3 },
  { url: cat4, id: 4 },
  { url: cat5, id: 5 },
  { url: cat6, id: 6 },
  { url: cat7, id: 7 },
  { url: cat8, id: 8 },
]; */
export const CatsCards: CardType[] = [
  { url: '../../../../assets/cats-cards/cat.jpg', id: 1 },
  { url: '../../../../assets/cats-cards/cat2.png', id: 2 },
  { url: '../../../../assets/cats-cards/cat3.jpg', id: 3 },
  { url: '../../../../assets/cats-cards/cat4.jpg', id: 4 },
  { url: '../../../../assets/cats-cards/cat5.jpg', id: 5 },
  { url: '../../../../assets/cats-cards/cat6.jpg', id: 6 },
  { url: '../../../../assets/cats-cards/cat7.jpg', id: 7 },
  { url: '../../../../assets/cats-cards/cat8.jpg', id: 8 },
];

console.log(CatsCards);
import { CardType } from './types';

export const aboutMe = new Map<string, string>([
  ['Github', 'https://github.com/uladziby'],
  ['Mail', 'yanushevskyv@gmail.com'],
  ['Task Repo', 'https://github.com/Uladziby/async-race-angular'],
]);
