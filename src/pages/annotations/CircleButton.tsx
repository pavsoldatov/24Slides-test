import { MouseEventHandler } from 'react';

interface CircleButtonProps {
  onOpen: MouseEventHandler<HTMLButtonElement>;
  number: number;
}

export const CircleButton = ({ number, onOpen }: CircleButtonProps) => {
  return (
    <button onClick={onOpen} className="h-[32px] w-[32px] font-bold text-slate-200">
      {number}
    </button>
  );
};
