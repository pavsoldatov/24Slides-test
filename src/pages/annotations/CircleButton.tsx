import { Dispatch, SetStateAction } from 'react';

interface CircleButtonProps {
  onOpen?: Dispatch<SetStateAction<boolean>>;
  number: number;
}

export const CircleButton = ({ number, onOpen }: CircleButtonProps) => {
  return (
    <button
      onClick={() => onOpen && onOpen((prevIsOpen) => !prevIsOpen)}
      className="h-[32px] w-[32px] font-bold text-slate-200"
    >
      {number}
    </button>
  );
};
