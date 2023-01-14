import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import css from './Annotation.module.scss';

interface WrapperProps extends ComponentPropsWithoutRef<'div'> {
  isElevated: boolean;
  x: string;
  y: string;
}

export const Wrapper = ({ isElevated, x, y, children }: WrapperProps) => {
  return (
    <div className={clsx(css.annotation, isElevated ? 'z-10' : 'z-0')} style={{ left: x, top: y }}>
      {children}
    </div>
  );
};
