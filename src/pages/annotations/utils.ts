import { useRef } from 'react';

export const getCoordsInPercent = (x: number, y: number) => {
  return {
    x: x * 100 + '%',
    y: y * 100 + '%',
  };
};

export const useFocus = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);

  if (ref.current) {
    setTimeout(() => {
      ref.current?.focus();
    }, 50);
  }

  return ref;
};
