/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';

export const useRenderHighlight = (className: string) => {
  // TODO fix any
  const ref = useRef<HTMLElement | null>(null);

  if (ref.current) {
    ref.current.classList.add(className);
    setTimeout(() => {
      if (ref.current) {
        ref.current.classList.remove(className);
      }
    }, 200);
  }

  return ref;
};

// TODO fix any
export const range = <T>(n: number, fn: (n: number) => T): T[] => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fn(i + 1));
  }
  return result;
};

// TODO fix any
export const chooseRandomly = <T>(items: T[]) => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

export const addDays = (date: Date, amount: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + amount);
  return newDate;
};

export const formatDate = (date: Date) => date.toISOString().split('T')[0];
