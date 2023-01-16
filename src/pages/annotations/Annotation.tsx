import clsx from 'clsx';
import { useState, memo, useMemo } from 'react';
import {
  AnnotationType,
  AnnotationContent,
  CircleButton,
  Wrapper,
  Panel,
  getCoordsInPercent,
} from '~/pages';
import css from './Annotation.module.scss';

export interface AnnotationProps {
  annotation: AnnotationType;
  number: number;
}

export const Annotation = memo(({ annotation, number }: AnnotationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleVisibility = () => setIsOpen(!isOpen);

  const { id, comment, author, pos } = annotation;
  const { x, y } = useMemo(() => getCoordsInPercent(pos.x, pos.y), [pos.x, pos.y]);

  return (
    <Wrapper
      className={clsx(annotation ? css.fadeIn : css.fadeOut)}
      isElevated={isOpen}
      x={x}
      y={y}
    >
      <CircleButton onClick={handleVisibility} number={number} />
      <Panel isOpen={isOpen}>
        <AnnotationContent id={id} comment={comment} author={author} />
      </Panel>
    </Wrapper>
  );
});
