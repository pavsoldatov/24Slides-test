import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import css from './Annotation.module.scss';

interface WrapperProps extends ComponentPropsWithoutRef<'li'> {
  x: string;
  y: string;
}

export const Wrapper = ({ x, y, children, ...props }: WrapperProps) => {
  return (
    <li className={clsx(css.annotation, props.className)} style={{ left: x, top: y }}>
      {children}
    </li>
  );
};
