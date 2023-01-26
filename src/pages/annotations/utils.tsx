import { useRef, useEffect, useState, Dispatch, SetStateAction, MouseEventHandler } from 'react';

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

export const useSyncAnnotationToggle = (
  currentId: number,
  activeId: number,
  setActiveId: Dispatch<SetStateAction<number>>,
) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVisibility: MouseEventHandler<HTMLButtonElement> = () => {
    if (currentId) setActiveId(currentId);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (activeId !== currentId) {
      setIsOpen(false);
    }
  }, [activeId, currentId]);

  return [handleVisibility, currentId === activeId && isOpen] as const;
};
