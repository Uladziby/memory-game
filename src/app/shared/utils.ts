export function delay(timeout: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export function getFieldSize(type: '4x4' | '4x5'): number {
  switch (type) {
    case '4x4':
      return 8;
    case '4x5':
      return 10;
    default:
      return 8;
  }
}
