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
  isLoading: boolean;
  number: number;
}

export const Annotation = memo(({ annotation, number }: AnnotationProps) => {
  const { x, y } = useMemo(
    () => getCoordsInPercent(annotation.x, annotation.y),
    [annotation.x, annotation.y],
  );
  console.log('rerendered');
  const [isOpen, setIsOpen] = useState(false);
  const handleVisibility = () => setIsOpen(!isOpen);

  return (
    <Wrapper
      className={clsx(annotation ? css.fadeIn : css.fadeOut)}
      isElevated={isOpen}
      x={x}
      y={y}
    >
      <CircleButton onClick={handleVisibility} number={number} />
      <Panel isOpen={isOpen}>
        <AnnotationContent text={annotation.text} id={annotation.id} />
      </Panel>
    </Wrapper>
  );
});
