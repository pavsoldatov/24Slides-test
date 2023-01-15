import clsx from 'clsx';
import { MouseEventHandler } from 'react';

interface CircleButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  number?: number;
}

export const CircleButton = ({ number, onClick }: CircleButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'h-[32px] w-[32px] font-bold text-slate-200 rounded-full',
        'shadow-[0px_0px_0px_0.5px_#ffffff,_0px_0px_0px_1.5px_#d4d4d4]',
      )}
    >
      {number}
    </button>
  );
};
