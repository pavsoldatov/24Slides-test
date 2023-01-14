import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import css from './Annotation.module.scss';

interface PanelProps extends ComponentPropsWithoutRef<'div'> {
  isOpen: boolean;
}

export const Panel = ({ isOpen, children, onClick }: PanelProps) => {
  return (
    <div
      className={clsx(
        isOpen ? css.fadeIn : css.fadeOut,
        'absolute -translate-x-1/2 -translate-y-1/2 top-[84px] left-[50%] px-4 py-4 min-w-[360px] text-neutral-900 text-sx bg-white drop-shadow border-[1px] border-solid border-[#EFEFF0] rounded',
      )}
      onClick={onClick}
    >
      <div className="absolute -top-[4px] left-[50%] -translate-x-1/2 -translate-y-1/2  border-l-[10px] border-l-transparent border-b-[12px] border-b-white border-r-[10px] border-r-transparent" />{' '}
      {children}
    </div>
  );
};
