import { SelecetedFieldSize } from '@/app/shared/types';

export function delay(timeout: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

export function getFieldSize(type: '4x4' | '4x5'): number {
  switch (type) {
    case '4x4':
      return 8;
    case '4x5':
      return 10;
  }
}
