import clsx from 'clsx';
import { ComponentPropsWithoutRef, memo } from 'react';
import css from './Annotation.module.scss';

interface WrapperProps extends ComponentPropsWithoutRef<'div'> {
  isElevated: boolean;
  isNewAnnotation?: boolean;
  x: string;
  y: string;
}

export const Wrapper = memo(({ isElevated, x, y, children, ...props }: WrapperProps) => {
  console.log('wrapper');
  return (
    <div
      className={clsx(css.annotation, isElevated ? 'z-10' : 'z-0', props.className)}
      style={{ left: x, top: y }}
    >
      {children}
    </div>
  );
});
